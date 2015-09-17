var fileAPI = require('../../api/file.js');
var parseDom = require('./parse-dom.js');
var buildTree = require('./build-tree.js');
var Node = require('basis.ui').Node;
var jsSourcePopup = require('./js-source-popup.js');
var showSource = new basis.Token(false);
var selectedDomNode = new basis.Token();
var selectedView = selectedDomNode.as('__view');
var selectedModel = selectedView.as('model');
var selectedCollection = selectedView.as('collection');

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

function findParentView(node){
  var cursor = node && node.parentNode;
  while (cursor && !cursor.__view)
    cursor = cursor.parentNode;
  return cursor && cursor.__view;
}

function getRefLoc(ref){
  return basis.dev.getInfo(ref, 'loc');
}
function getRefClassLoc(ref){
  return basis.dev.getInfo(ref && ref.constructor, 'loc');
}

var view = new Node({
  container: document.body,
  visible: selectedDomNode.as(Boolean),

  template: resource('./template/window.tmpl'),
  binding: {
    visible: 'visible',
    upName: selectedDomNode.as(function(node){
      return findParentView(node) ? 'parent' : '';
    }),
    sourceTitle: function(){ return '' },
    objectId: selectedView.as(function(object){
      if (object)
        return object.cid;
    }),
    objectLoc: selectedView.as(getRefLoc),
    objectClassLoc: selectedView.as(getRefClassLoc),
    objectRenderLoc: selectedView.as(function(ref){
      if (ref)
        ref = ref.render || (ref.constructor && ref.constructor.render);
      return basis.dev.getInfo(ref, 'loc');
    }),
    modelLoc: selectedModel.as(getRefLoc),
    modelClassLoc: selectedModel.as(getRefClassLoc),
    collectionLoc: selectedCollection.as(getRefLoc),
    collectionClassLoc: selectedCollection.as(getRefClassLoc)
  },
  action: {
    up: function(){
      var view = findParentView(selectedDomNode.value);
      if (view)
        selectedDomNode.set(view.el);
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
      global.$backboneView = selectedView.value;
      console.log($backboneView);
    }
  }
});

module.exports = selectedDomNode;
