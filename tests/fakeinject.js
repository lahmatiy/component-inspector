import apiAdapter from './../src/api-adapter/react/react-api-adapter';
import api from './../src/inspector/api';
window.classViewConfig = {};
window.instanceViewConfig = {};
var adoptAPI = (reactApi) => {
  api.set(apiAdapter.api({
    reactApi: reactApi, ClassView: function (config) {
      window.classViewConfig = config
    }, InstanceView: function (config) {
      window.instanceViewConfig = config
    }
  }));

  window.reactInspectorApi = api;

};
// React
var oldHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (oldHook) {
  var oldInject = oldHook.inject;
  oldHook.inject = function (api) {
    adoptAPI(api);
    oldInject.apply(this, arguments);
  };
}
else {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    inject: adoptAPI
  };
}
