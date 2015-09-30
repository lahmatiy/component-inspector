var api = new basis.Token()
var elementMap = {};
var getNode;
var getID;

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
    name = getInfo(element).name;
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
    return cls;
  }

  return null;
}

function getInstanceLocation(element){
  return element ? this.getLocation(element._currentElement) : null;
}

function getInstanceRenderLocation(element){
  var render = element &&
               element._instance &&
               element._instance.render;

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

    ignoreAttribute: function(attr){
      return attr.name === 'data-reactid';
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
  }
}

// provide ready function
module.exports = {
  ready: function(fn){
    api.attach(fn);
  }
};
