function patchApi(api){
  /** @cut */ window.reactDevApi = api;

  var reactDevApi = api;
  var _instanceMap = {};

  function getReactElementFromNative(node) {
    var id = api.Mount.getID(node);
    while (node && node.parentNode && !id) {
      node = node.parentNode;
      id = api.Mount.getID(node);
    }
    return _instanceMap[id];
  }

  function getInstanceByNode(node){
    var element = getReactElementFromNative(node);
    try {
      node = api.Mount.getNode(element._rootNodeID);
    } catch(e) {}

    return element && node ? { element: element, node: node } : null;
  }

  function isComponentInstance(instance){
    return instance &&
        instance.element._currentElement &&
        typeof instance.element._currentElement != 'number' &&
        typeof instance.element._currentElement != 'string' &&
        typeof instance.element._currentElement.type != 'string';
  }

  api.getInstanceByNode = getInstanceByNode;
  api.getComponent = function(node){
    var cursor = getInstanceByNode(node);

    while (cursor && !isComponentInstance(cursor)) {
      cursor = getInstanceByNode(cursor.node.parentNode);
    }

    return cursor;
  };

  api.isComponent = function(node){
    return isComponentInstance(getInstanceByNode(node));
  };

  api.getInfo = function(element){
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
        // 0.14 top-level wrapper
        // TODO(jared): The backend should just act as if these don't exist.
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
  };

  var _mount = api.Reconciler.mountComponent;
  api.Reconciler.mountComponent = function(instance){
    var res = _mount.apply(this, arguments);
    _instanceMap[instance._rootNodeID] = instance;
    return res;
  }

  basis.reactApi = api;
  require('./react/index.js');
}

var oldHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (oldHook)
{
  var oldInject = oldHook.inject;
  oldHook.inject = function(api){
    patchApi(api);
    oldInject.call(this, api);
  };
}
else
{
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    inject: function(api){
      patchApi(api);
    }
  }
}
