var api = new basis.Token();

function isComponentRootNode(node) {
  if (node && node.__view) {
    return true;
  }

  return false;
}

function getInstanceByNode(node) {
  if (node) {
    return node.__view;
  }
}

function getInstanceRootNode(view) {
  if (view) {
    return view.el;
  }
}

if (typeof Backbone != 'undefined')
{
  // patch backbone.js to have references to view
  var _setElement = Backbone.View.prototype._setElement;
  Backbone.View.prototype._setElement = function () {
    _setElement.apply(this, arguments);
    this.el.__view = this;
  };

  basis.nextTick(function(){
    api.set({
      isComponentRootNode: isComponentRootNode,
      getInstanceByNode: getInstanceByNode,
      getInstanceRootNode: getInstanceRootNode
    });
  });
}
else
{
  console.warn('Backbone doesn\'t found. Include component-inspector script right after backbone.js');
}

// provide ready function
module.exports = {
  ready: function(fn){
    api.attach(fn);
  }
};
