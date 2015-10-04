var hasOwnProperty = Object.prototype.hasOwnProperty;
var api = new basis.Token()
var elementMap = {};
var getNode;
var getID;

function unwrap(value, getDevInfo) {
  var info;

  while (info = getDevInfo(value)) {
    if (!info.wrapperFor) {
      break;
    }

    value = info.wrapperFor;
  }

  return value;
}

function getReactElementByNode(node) {
  var element = elementMap[getID(node)];

  if (element && getNode(element._rootNodeID)) {
    return element;
  }

  return null;
}

function isComponentRootNode(node){
  var element = getReactElementByNode(node);

  if (element &&
      element._currentElement &&
      typeof element._currentElement != 'number' &&
      typeof element._currentElement != 'string' &&
      typeof element._currentElement.type != 'string') {
    return true;
  }

  return false;
}

function getComponentNameByNode(node){
  var element = getReactElementByNode(node);
  var name;

  if (element) {
    if (element._instance) {
      var constructor = element._instance.constructor;
      var rootConstructor = unwrap(constructor, this.getDevInfo);

      if (constructor !== rootConstructor) {
        name = rootConstructor.displayName || rootConstructor.name;
      }
    }

    if (!name) {
      name = getInfo(element).name;
    }
  }

  return name ? '<' + name + '>' : 'Unknown';
}

function getInstanceRootNode(element){
  if (element && element._rootNodeID) {
    return getNode(element._rootNodeID);
  }
}

function getInstanceClass(element){
  var cls = element &&
            element._instance &&
            element._instance.constructor;

  if (typeof cls == 'function') {
    return unwrap(cls, this.getDevInfo);
  }

  return null;
}

function getAdditionalInstanceInfo(element){
  var decorators = [];
  var info;
  var cls = element &&
            element._instance &&
            element._instance.constructor;

  if (typeof cls == 'function') {
    while (info = this.getDevInfo(cls)) {
      if (!info.wrapperFor) {
        break;
      }

      decorators.push({
        name: '[decorator] ' + (cls.displayName || cls.name || 'UnknownName'),
        locations: [
          {
            type: 'class',
            loc: this.getLocation(cls)
          },
          {
            type: 'render',
            loc: this.getLocation(cls.prototype.render)
          }
        ]
      });

      cls = info.wrapperFor;
    }
  }

  return decorators.reverse();
}

function getInstanceLocation(element){
  return element ? this.getLocation(element._currentElement) : null;
}

function getInstanceRenderLocation(element){
  var instance = element && element._instance;
  var render;

  if (instance) {
    if (hasOwnProperty.call(instance, 'render')) {
      render = instance.render;
    } else {
      var constructor = unwrap(instance.constructor, this.getDevInfo);
      if (constructor && constructor.prototype) {
        render = constructor.prototype.render;
      }
    }
  }

  if (typeof render == 'function') {
    return this.getLocation(render);
  }
}

function getNodeLocation(node){
  var element = getReactElementByNode(node);

  if (element) {
    var host = element._renderedComponent || element;

    return this.getLocation(host._currentElement);
  }

  return null;
}

function getNestedComponentNodeLocation(node){
  var element = getReactElementByNode(node);

  if (element) {
    return this.getLocation(element._currentElement);
  }

  return null;
}

function getInfo(element){
  var name = null;
  var type = null;
  var nodeType = 'Native';

  if (element && element._currentElement) {
    type = element._currentElement.type;
    if (typeof type === 'string') {
      name = type;
    } else if (element.getName) {
      nodeType = 'Composite';
      name = element.getName();

      if (element._renderedComponent && element._currentElement.props === element._renderedComponent._currentElement) {
        nodeType = 'Wrapper';
      }

      if (name === null) {
        name = 'No display name';
      }
    } else if (element._stringText) {
      // nodeType = 'Text';
      // text = element._stringText;
    } else {
      name = type.displayName || type.name || 'Unknown';
    }
  }

  return {
    nodeType: nodeType,
    name: name
  };
}

function adoptAPI(reactApi) {
  getID = reactApi.Mount.getID;
  getNode = reactApi.Mount.getNode;

  // patch React
  var _mount = reactApi.Reconciler.mountComponent;
  var _unmount = reactApi.Reconciler.unmountComponent;
  reactApi.Reconciler.mountComponent = function(instance){
    var res = _mount.apply(this, arguments);
    elementMap[instance._rootNodeID] = instance;
    return res;
  };
  reactApi.Reconciler.unmountComponent = function(instance){
    delete elementMap[instance._rootNodeID];
    return _unmount.apply(this, arguments);
  };

  // export API
  api.set({
    isComponentRootNode: isComponentRootNode,
    getComponentNameByNode: getComponentNameByNode,
    getInstanceByNode: getReactElementByNode,
    getInstanceRootNode: getInstanceRootNode,
    getInstanceClass: getInstanceClass,
    getInstanceLocation: getInstanceLocation,
    getInstanceRenderLocation: getInstanceRenderLocation,
    getNodeLocation: getNodeLocation,
    getAdditionalInstanceInfo: getAdditionalInstanceInfo,

    getNestedComponentNameByNode: getComponentNameByNode,
    getNestedComponentNodeLocation: getNestedComponentNodeLocation,
    viewAttributeFilter: function(attr){
      return attr.name !== 'data-reactid';
    }
  });
}

// attach to React devtools
var oldHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (oldHook)
{
  var oldInject = oldHook.inject;
  oldHook.inject = function(api){
    adoptAPI(api);
    oldInject.apply(this, arguments);
  };
}
else
{
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    inject: adoptAPI
  };
}

// provide ready function
module.exports = {
  ready: function(fn){
    api.attach(fn);
  }
};
