var api = require('../api.js');
var parseDom = require('./parse-dom.js');
var buildTree = require('./build-tree.js');
var Node = require('basis.ui').Node;
var InfoSection = require('./info.js');
var selectedDomNode = new basis.Token();
var selectedInstance = selectedDomNode.as(api.getInstanceByNode)

function syncSelectedNode(){
  var element = api.getInstanceRootNode(selectedInstance.value);

  if (selectedDomNode.value === element) {
    selectedDomNode.apply();
  } else {
    selectedDomNode.set(element);
  }
}

// dom mutation observer
var observer = (function(){
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

selectedDomNode.attach(function(node){
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

selectedDomNode.attach(function(node){
  if (!node) {
    return view.clear();
  }

  var nodes = parseDom(node, api);
  var actions = {};
  var bindings = [];

  view.setChildNodes(buildTree(nodes, bindings, actions, function(node){
    selectedDomNode.set(node);
  }));
});

function findParentComponent(node){
  node = node && node.parentNode;

  while (node) {
    if (api.isComponentRootNode(node)) {
      return node;
    }

    node = node.parentNode
  }    

  return null;
}

var defaultInfoSection = {
  name: 'Component',
  childNodes: [
    {
      type: 'instance',
      loc: selectedInstance.as(api.getInstanceLocation),
    },
    {
      type: 'class',
      loc: selectedInstance.as(function getRefClassLoc(instance){
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
  childClass: InfoSection,
  childNodes: [
    defaultInfoSection
  ]
});

selectedInstance.attach(function(instance){
  info.setChildNodes([defaultInfoSection].concat(
    api.getAdditionalInstanceInfo(instance) || []
  ));
});

var view = new Node({
  container: document.body,
  visible: selectedDomNode.as(Boolean),

  template: resource('./template/window.tmpl'),
  binding: {
    visible: 'visible',
    upName: selectedDomNode.as(function(node){
      return findParentComponent(node) ? 'parent' : '';
    }),
    sourceTitle: selectedDomNode.as(api.getComponentNameByNode),
    info: 'satellite:'
  },
  action: {
    up: function(){
      selectedDomNode.set(findParentComponent(selectedDomNode.value));
    },
    close: function(){
      selectedDomNode.set();
    },
    logInfo: function(){
      global.$component = {
        node: selectedDomNode.value,
        instance: selectedInstance.value
      };

      console.log($component);
    }
  },
  satellite: {
    info: info
  }
});

module.exports = selectedDomNode;
