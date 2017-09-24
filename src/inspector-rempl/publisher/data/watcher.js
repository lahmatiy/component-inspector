var api = require('../api.js');
var parseDom = require('./parse-dom.js');
var remoteDomTree = require('../remote.js').ns('dom-tree');
var remoteDetails = require('../remote.js').ns('details');
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

selectedDomNode.attach(function(node) {
  var data = null;

  if (node) {
    var dom = parseDom(node, api);

    data = {
      tree: dom.tree,
      upName: findParentComponent(node) ? 'parent' : '',
      sourceTitle: api.getComponentNameByNode(node)
    };

    remoteDomTree.provide('selectNodeById', function(id) {
      selectedDomNode.set(dom.map[id]);
    });
  } else {
    remoteDomTree.revoke('selectNodeById');
  }

  remoteDomTree.publish(data);
});

selectedInstance.attach(function(instance) {
  var details = [];

  if (instance) {
    if (api.showDefaultInfo(instance)) {
      details.push({
        type: 'default',
        locations: [
          {
            type: 'instance',
            loc: api.getInstanceLocation(instance)
          },
          {
            type: 'class',
            loc: api.getLocation(api.getInstanceClass(instance))
          },
          {
            type: 'render',
            loc: api.getInstanceRenderLocation(instance)
          }
        ]
      });
    }

    details.push.apply(details, api.getAdditionalInstanceInfo(instance));
  }

  remoteDetails.publish(details);
});

remoteDomTree.provide({
  up: function() {
    selectedDomNode.set(findParentComponent(selectedDomNode.value));
  },
  reset: function() {
    selectedDomNode.set();
  },
  logInfo: function() {
    api.logComponentInfo(api.buildComponentInfo(
      selectedInstance.value,
      selectedDomNode.value
    ));
  }
});

module.exports = selectedDomNode;
