var stringifyWithLimit = require('./stringify-with-limit.js');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var CONTAINED_BY = document.DOCUMENT_POSITION_CONTAINED_BY;

function unwrap(value, getDevInfo) {
  var info;

  while (info = getDevInfo(value)) {
    if (!info.wrapper || !info.wrapper.target) {
      break;
    }

    value = info.wrapper.target;
  }

  return value;
}

function getInstanceClass(element) {
  var cls = element &&
    element._instance &&
    element._instance.constructor;

  if (typeof cls == 'function') {
    return unwrap(cls, this.getDevInfo);
  }

  return null;
}

function getComponentNameByNode(node) {
  var element = this.getInstanceByNode(node);
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

  return name || 'Unknown';
}


function getInfo(element) {
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
    // } else if (element._stringText) {
    //  nodeType = 'Text';
    //  text = element._stringText;
    } else {
      name = type.displayName || type.name || 'Unknown';
    }
  }

  return {
    nodeType: nodeType,
    name: name
  };
}

function getPropValueType(value) {
  if (typeof value === 'string') {
    return 'string';
  } else if (typeof value === 'function') {
    return 'function';
  } else {
    return 'other';
  }
}

function getPropValueText(type, value) {
  switch (type) {
    case 'string':
      return stringifyWithLimit.sliceText(value, 20);

    case 'function':
      // Additional 9 characters for 'function '
      return stringifyWithLimit(value, 29);

    case 'other':
      return stringifyWithLimit(value, 20);
  }
}

function getInstancePropsInfo(instanceProps, getLocation) {
  var props = [];

  for (var prop in instanceProps) {
    if (hasOwnProperty.call(instanceProps, prop)) {
      var value = instanceProps[prop];
      var type = getPropValueType(value);
      var valueText = getPropValueText(type, value);

      props.push({
        key: prop,
        type: type,
        valueText: valueText,
        valueLoc: value && (typeof value === 'object' || typeof value === 'function') ? getLocation(value) : undefined
      });
    }
  }

  return props;
}

function getAdditionalInstanceInfo(element) {
  function getClassName(cls) {
    return cls.displayName || cls.name;
  }

  var instanceRootNode = this.getInstanceRootNode(element);
  var instance = element && element._instance;
  var cls = instance && instance.constructor;
  var wrapperClassMap = {};
  var decorators = [];
  var props = [];
  var info;

  if (typeof cls == 'function') {
    while (info = this.getDevInfo(cls)) {
      if (!info.wrapper || !info.wrapper.target) {
        break;
      }

      wrapperClassMap[info.wrapper.index] = cls;

      cls = info.wrapper.target;
    }
  }

  if (info && Array.isArray(info.decorators)) {
    decorators = info.decorators.map(function(decorator, idx) {
      var wrapperClass = wrapperClassMap[idx];
      var classLoc;
      var renderLoc;

      if (wrapperClass) {
        classLoc = this.getLocation(wrapperClass);
        renderLoc = this.getClassMethodLocation(wrapperClass, 'render');
      }

      return {
        name: decorator.name,
        loc: decorator.loc,
        fnLoc: this.getLocation(decorator.fn),
        classLoc: classLoc,
        renderLoc: renderLoc
      };
    }, this);
  }

  if (instance.props) {
    props = getInstancePropsInfo(instance.props, this.getLocation);
  }

  return [
    {
      type: 'tag-instance-info',
      name: this.getComponentNameByNode(instanceRootNode),
      loc: this.getInstanceLocation(element),
      props: props
    },
    {
      type: 'class-info',
      decorators: decorators,
      isClass: info && info.type === 'class',
      className: getClassName(cls) || '<Unknown>',
      classLoc: this.getLocation(cls),
      renderLoc: this.getClassMethodLocation(cls, 'render') || this.getLocation(cls && cls.prototype.render),
      extendsClassName: Object.getPrototypeOf
        ? getClassName(Object.getPrototypeOf(cls)) || 'React.Component'
        : 'unknown',
      extendsLoc: Object.getPrototypeOf
        ? this.getLocation(Object.getPrototypeOf(cls))
        : null
    }
  ];
}

function getInstanceLocation(element) {
  return element ? this.getLocation(element._currentElement) : null;
}

function getInstanceRenderLocation(element) {
  var instance = element && element._instance;

  if (instance) {
    if (hasOwnProperty.call(instance, 'render')) {
      return this.getLocation(instance.render);
    } else {
      var constructor = unwrap(instance.constructor, this.getDevInfo);
      if (constructor) {
        return this.getClassMethodLocation(constructor, 'render');
      }
    }
  }
}

function getNodeLocation(node) {
  var element = this.getLocationInstanceByNode(node);

  if (element) {
    var host = element._renderedComponent || element;

    return this.getLocation(host._currentElement);
  }

  return null;
}

var instanceResolvers = [];
var instanceRootResolvers = [];
var reactPrior15Inited = false;

function resolveInstanceByNode(node) {
  if (node) {
    var candidateInstance = null;
    var candidateRoot = null;

    for (var i = 0; i < instanceResolvers.length; i++) {
      var instance = instanceResolvers[i].getInstance(node);
      if (instance) {
        var root = instanceResolvers[i].getRootNode(instance);

        if (candidateRoot === null || (candidateRoot.compareDocumentPosition(root) & CONTAINED_BY)) {
          candidateInstance = instance;
          candidateRoot = root;
        }
      }
    }

    return candidateInstance;
  }

  return null;
}

function resolveInstanceRootNode(instance) {
  if (instance) {
    // find nodes
    for (var i = 0; i < instanceRootResolvers.length; i++) {
      try {
        var node = instanceRootResolvers[i](instance);
        if (node) {
          return node;
        }
      } catch (e) {}
    }
  }

  return null;
}

module.exports = function(reactApi) {
  var getLocationInstanceByNode;
  var getInstanceByNode;
  var getInstanceRootNode;
  var isComponentRootNode;
  var isForeignComponentNode;

  if (reactApi.ComponentTree) {
    // React 15.0+

    if (reactPrior15Inited) {
      throw new Error('React prior 15.0 and 15.0+ can\'t be mixed on single page');
    }

    instanceResolvers.push({
      getInstance: reactApi.ComponentTree.getClosestInstanceFromNode,
      getRootNode: reactApi.ComponentTree.getNodeFromInstance
    });
    instanceRootResolvers.push(reactApi.ComponentTree.getNodeFromInstance);
    getLocationInstanceByNode = resolveInstanceByNode;
    getInstanceRootNode = resolveInstanceRootNode;

    getInstanceByNode = function(node) {
      var instance = this.getLocationInstanceByNode(node);
      return instance && instance._currentElement != null
        ? instance._currentElement._owner
        : null;
    };
    isComponentRootNode = function(node) {
      var instance = this.getInstanceByNode(node);
      return instance
        ? this.getInstanceRootNode(instance) === node
        : false;
    };
    isForeignComponentNode = function(root, node) {
      var rootInstance = this.getInstanceByNode(root);
      var nodeInstance = this.getInstanceByNode(node);
      return Boolean(rootInstance && nodeInstance && rootInstance._hostContainerInfo !== nodeInstance._hostContainerInfo);
    };
  } else if (reactApi.Mount.getID && reactApi.Mount.getNode) {
    reactPrior15Inited = true;
    if (instanceResolvers.length) {
      throw new Error('React prior 15.0 and 15.0+ can\'t be mixed on single page');
    }

    // React prior 15.0
    getInstanceByNode = function(node) {
      var instance = instanceByNodeMap[getID(node)];

      if (instance && getNode(instance._rootNodeID)) {
        return instance;
      }

      return null;
    };
    getLocationInstanceByNode = getInstanceByNode;
    getInstanceRootNode = function(instance) {
      if (instance && instance._rootNodeID) {
        return getNode(instance._rootNodeID);
      }
    };
    isComponentRootNode = function(node) {
      var instance = this.getInstanceByNode(node);
      return Boolean(
        instance &&
        instance._currentElement &&
        typeof instance._currentElement != 'number' &&
        typeof instance._currentElement != 'string' &&
        typeof instance._currentElement.type != 'string'
      );
    };
    isForeignComponentNode = function() {
      return false;
    };

    // patch React to make things work
    var getID = reactApi.Mount.getID;
    var getNode = reactApi.Mount.getNode;
    var instanceByNodeMap = {};
    var _mount = reactApi.Reconciler.mountComponent;
    var _unmount = reactApi.Reconciler.unmountComponent;
    reactApi.Reconciler.mountComponent = function(instance) {
      var res = _mount.apply(this, arguments);
      instanceByNodeMap[instance._rootNodeID] = instance;
      return res;
    };
    reactApi.Reconciler.unmountComponent = function(instance) {
      delete instanceByNodeMap[instance._rootNodeID];
      return _unmount.apply(this, arguments);
    };
  } else {
    throw new Error('This version of React is not supported');
  }

  return {
    isComponentRootNode: isComponentRootNode,
    isForeignComponentNode: isForeignComponentNode,
    getComponentNameByNode: getComponentNameByNode,
    getInstanceByNode: getInstanceByNode,
    getInstanceRootNode: getInstanceRootNode,
    getInstanceClass: getInstanceClass,
    getInstanceLocation: getInstanceLocation,
    getInstanceRenderLocation: getInstanceRenderLocation,
    getLocationInstanceByNode: getLocationInstanceByNode, // can we remove it?
    getNodeLocation: getNodeLocation,
    getAdditionalInstanceInfo: getAdditionalInstanceInfo,
    showDefaultInfo: function() {
      return false;
    },

    viewAttributeFilter: function(attr) {
      return attr.name !== 'data-reactid';
    }
  };
};
