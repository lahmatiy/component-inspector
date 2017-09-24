import createApi from './../src/api-adapter/react/create-api';
import api from './../src/inspector/api';

var adoptAPI = (reactApi) => {
  api.set(createApi(reactApi));

  window.reactInspectorApi = api;
};

// React
var oldHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (oldHook) {
  var oldInject = oldHook.inject;
  oldHook.inject = function(api) {
    adoptAPI(api);
    oldInject.apply(this, arguments);
  };
} else {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    inject: adoptAPI
  };
}
