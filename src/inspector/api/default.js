var fileAPI = require('./file.js');
var getDevInfo = require('./getDevInfo.js');

module.exports = {
  // dom tree traversal
  isComponentRootNode: function() {
    return false;
  },
  getComponentNameByNode: function() {
    return '';
  },
  getInstanceByNode: function() {
    return null;
  },
  getInstanceRootNode: function() {
    return null;
  },
  getInstanceClass: function(instance) {
    if (instance && typeof instance.constructor == 'function') {
      return instance.constructor;
    }

    return null;
  },
  getInstanceLocation: function(instance) {
    return this.getLocation(instance);
  },
  getInstanceRenderLocation: function(instance) {
    var methodLocation = this.getClassMethodLocation(this.getInstanceClass(instance), 'render');
    if (methodLocation) {
      return methodLocation;
    }

    if (instance && typeof instance.render == 'function') {
      return this.getLocation(instance.render);
    }

    return null;
  },
  showDefaultInfo: function() {
    return true;
  },
  getAdditionalInstanceInfo: function() {
    return [];
  },
  getNodeLocation: function() {
    return null;
  },

  // dom view
  viewAttributeFilter: function() {
    return true;
  },

  // file API
  isOpenFileSupported: fileAPI.isOpenFileSupported,
  openFile: fileAPI.openFile,

  // info
  getDevInfo: getDevInfo,
  getLocation: function(value) {
    if (value) {
      return this.getDevInfo(value, 'loc');
    }
  },
  getClassMethodLocation: function(value, method) {
    if (value) {
      var methods = this.getDevInfo(value, 'methods');
      return methods ? methods[method] : null;
    }
  },
  buildComponentInfo: function(instance, node) {
    return {
      instance: instance,
      node: node
    };
  },
  logComponentInfo: function(info) {
    global.$component = info;
    console.log(info);
  }
};
