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

function getAdditionalInstanceInfo(instance) {
  function buildSection(name, ref) {
    return {
      name: name,
      locations: [
        {
          type: 'instance',
          loc: this.getLocation(ref)
        },
        {
          type: 'class',
          loc: this.getLocation(ref.constructor)
        }
      ]
    }
  }

  var result = [];

  if (instance.model) {
    result.push(buildSection.call(this, 'Model', instance.model));
  }

  if (instance.collection) {
    result.push(buildSection.call(this, 'Collection', instance.collection));
  }

  return result;
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
      getInstanceRootNode: getInstanceRootNode,
      getAdditionalInstanceInfo: getAdditionalInstanceInfo
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
