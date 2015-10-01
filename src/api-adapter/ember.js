var api = new basis.Token();
var views;

function isComponentRootNode(node) {
  if (node && /\bember-view\b/.test(node.className)) {
    return true;
  }

  return false;
}

function getInstanceByNode(node) {
  if (node) {
    return views[node.id];
  }
}

function getInstanceRootNode(view) {
  if (view) {
    return view.element;
  }
}

var checkForEmber = setInterval(function() {
  if (typeof Ember === 'undefined') {
    return;
  }

  clearInterval(checkForEmber);

  views = Ember.View.views || {};
  api.set({
    isComponentRootNode: isComponentRootNode,
    getInstanceByNode: getInstanceByNode,
    getInstanceRootNode: getInstanceRootNode,
    getInstanceClass: function(instance) {
      var cls = instance &&
                instance._controller &&
                instance._controller.constructor &&
                instance._controller.constructor.superclass;

      if (cls) {
        return cls;
      }
    }
  });
}, 250);

// provide ready function
module.exports = {
  ready: function(fn){
    api.attach(fn);
  }
};
