var fileAPI = require('./file.js');
var getDevInfo = require('./getDevInfo.js');

module.exports = {
  // dom tree traversal
  isComponentRootNode: function(){
    return false;
  },
  getComponentNameByNode: function(){
    return '';
  },
  getInstanceByNode: function(){
    return null;
  },
  getInstanceRootNode: function(){
    return null;
  },
  getInstanceClass: function(instance){
    if (instance && typeof instance.constructor == 'function') {
      return instance.constructor;
    }

    return null;
  },
  getInstanceLocation: function(instance){
    return this.getLocation(instance);
  },
  getInstanceRenderLocation: function(instance){
    if (instance && typeof instance.render == 'function') {
      return this.getLocation(instance.render);
    }

    return null;
  },
  getNodeLocation: function(){
    return null;
  },

  // build
  ignoreAttribute: function(){
    return false;
  },

  // file API
  isOpenFileSupported: fileAPI.isOpenFileSupported,
  openFile: fileAPI.openFile,

  // info
  getLocation: function(value){
    if (value) {
      return this.getDevInfo(value, 'loc');
    }
  },
  getDevInfo: getDevInfo,
  getInstanceDevInfo: function(instance, property){
    if (instance) {
      return this.getDevInfo(instance._currentElement, property);
    }
  }
};
