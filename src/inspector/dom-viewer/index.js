var api = require('../api.js');
var parseDom = require('./parse-dom.js');
var buildTree = require('./build-tree.js');
var Node = require('basis.ui').Node;
var sections = require('./sections.js');
var selectedDomNode = new basis.Token();
var selectedInstance = selectedDomNode.as(api.getInstanceByNode);

function syncSelectedNode() {
  var element = api.getInstanceRootNode(selectedInstance.value);

  if (selectedDomNode.value === element) {
    selectedDomNode.apply();
  } else {
    selectedDomNode.set(element);
  }
}

// dom mutation observer
var observer = (function() {
  var names = ['MutationObserver', 'WebKitMutationObserver'];

  for (var i = 0, name; name = names[i]; i++) {
    var ObserverClass = global[name];
    if (typeof ObserverClass == 'function') {
      return new ObserverClass(syncSelectedNode);
    }
  }

  // fallback for case if MutationObserver doesn't support
  setInterval(syncSelectedNode, 100);
})();

selectedDomNode.attach(function(node) {
  if (observer) {
    observer.disconnect();
  }

  if (observer && node) {
    observer.observe(node, {
      subtree: true,
      attributes: true,
      characterData: true,
      childList: true
    });
  }
});

selectedDomNode.attach(function(node) {
  if (!node) {
    return view.clear();
  }

  var nodes = parseDom(node, api);
  var actions = {};
  var bindings = [];

  view.setChildNodes(buildTree(nodes, bindings, actions, function(node) {
    selectedDomNode.set(node);
  }));
});

function findParentComponent(node) {
  node = node && node.parentNode;

  while (node) {
    if (api.isComponentRootNode(node)) {
      return node;
    }

    node = node.parentNode;
  }

  return null;
}

var defaultSection = {
  name: 'Component',
  childNodes: [
    {
      type: 'instance',
      loc: selectedInstance.as(api.getInstanceLocation)
    },
    {
      type: 'class',
      loc: selectedInstance.as(function getRefClassLoc(instance) {
        var cls = api.getInstanceClass(instance);
        return api.getLocation(cls);
      })
    },
    {
      type: 'render',
      loc: selectedInstance.as(api.getInstanceRenderLocation)
    }
  ]
};

var info = new Node({
  childClass: sections.Section
});

var sectionFactory = {
  html: function(name, html) {
    return new sections.HTMLSection({
      name: name || '',
      html: String(html)
    });
  },
  dom: function(name, element) {
    return new sections.DOMSection({
      name: name || '',
      dom: element
    });
  }
};

selectedInstance.attach(function(instance) {
  if (!instance) {
    info.setChildNodes();
    return;
  };

  var base = api.showDefaultInfo(instance) ? [defaultSection] : [];
  info.setChildNodes(base.concat(
    api.getAdditionalInstanceInfo(instance, sectionFactory) || []
  ));
});

var view = new Node({
  container: document.body,
  visible: selectedDomNode.as(Boolean),

  template: resource('./template/window.tmpl'),
  binding: {
    visible: 'visible',
    upName: selectedDomNode.as(function(node) {
      return findParentComponent(node) ? 'parent' : '';
    }),
    sourceTitle: selectedDomNode.as(api.getComponentNameByNode),
    info: 'satellite:'
  },
  action: {
    up: function() {
      selectedDomNode.set(findParentComponent(selectedDomNode.value));
    },
    close: function() {
      selectedDomNode.set();
    },
    logInfo: function() {
      api.logComponentInfo(api.buildComponentInfo(
        selectedInstance.value,
        selectedDomNode.value
      ));
    }
  },
  satellite: {
    info: info
  }
});

module.exports = selectedDomNode;
