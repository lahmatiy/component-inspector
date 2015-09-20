var fileAPI = require('../../api/file.js');
var parseDom = require('./parse-dom.js');
var buildTree = require('./build-tree.js');
var Node = require('basis.ui').Node;
var jsSourcePopup = require('./js-source-popup.js');
var showSource = new basis.Token(false);
var selectedDomNode = new basis.Token();
var selectedComponent = selectedDomNode.as(function(node){
  return node && basis.reactApi.getComponent(node);
});

function syncSelectedNode(){
  var element = selectedView.value && selectedView.value.el;

  if (selectedDomNode.value === element)
    selectedDomNode.apply();
  else
    selectedDomNode.set(element);
}

// dom mutation observer
var observer = (function(){
  var names = ['MutationObserver', 'WebKitMutationObserver'];

  for (var i = 0, name; name = names[i]; i++)
  {
    var ObserverClass = global[name];
    if (typeof ObserverClass == 'function')
      return new ObserverClass(syncSelectedNode);
  }

  // fallback for case if MutationObserver doesn't support
  setInterval(syncSelectedNode, 100);
})();

selectedDomNode.attach(function(node){
  if (observer)
    observer.disconnect();

  if (observer && node)
    observer.observe(node, {
      subtree: true,
      attributes: true,
      characterData: true,
      childList: true
    });
});

selectedDomNode.attach(function(node){
  if (!node)
    return view.clear();

  var nodes = parseDom(node);
  var actions = {};
  var bindings = [];

  view.setChildNodes(buildTree(nodes, bindings, actions, function(node){
    selectedDomNode.set(node);
  }));
});

function findParentComponent(node){
  var component = node && basis.reactApi.getComponent(node.parentNode);
  return component;
}

function getRefLoc(ref){
  return ref
    ? basis.reactApi.getDevInfo(ref.element._currentElement, 'loc')
    : null;
}
function getRefClassLoc(ref){
  return basis.reactApi.getDevInfo(ref && ref.element._instance.constructor, 'loc');
}

var view = new Node({
  container: document.body,
  visible: selectedDomNode.as(Boolean),

  template: resource('./template/window.tmpl'),
  binding: {
    visible: 'visible',
    upName: selectedDomNode.as(function(node){
      return findParentComponent(node) ? 'parent' : '';
    }),
    sourceTitle: selectedComponent.as(function(component){
      return component ? '<' + basis.reactApi.getInfo(component.element).name + '>' : '';
    }),
    objectLoc: selectedComponent.as(getRefLoc),
    objectClassLoc: selectedComponent.as(getRefClassLoc),
    objectRenderLoc: selectedComponent.as(function(ref){
      if (ref)
        return basis.reactApi.getDevInfo(ref.element._instance.render, 'loc');
    })
  },
  action: {
    up: function(){
      var component = findParentComponent(selectedDomNode.value);
      if (component)
        selectedDomNode.set(component.node);
    },
    close: function(){
      selectedDomNode.set();
    },
    openRefLocation: function(e){
      var loc = e.target.getAttribute('data-loc');
      if (loc)
        fileAPI.openFile(loc);
    },
    enterRefLocation: function(e){
      var loc = e.target.getAttribute('data-loc');
      if (loc)
      {
        jsSourcePopup.loc.set(loc);
        jsSourcePopup.show(e.actionTarget);
      }
    },
    leaveRefLocation: function(){
      jsSourcePopup.hide();
    },
    logInfo: function(){
      global.$reactComponent = selectedComponent.value;
      console.log($reactComponent);
    }
  }
});

module.exports = selectedDomNode;
