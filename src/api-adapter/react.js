var createApi = require('./react/create-api.js');
var api = new basis.Token();

function adoptAPI(reactApi) {
  // export API
  api.set(createApi(reactApi));
}
// attach to React devtools
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

// provide ready function
module.exports = {
  ready: function(fn) {
    api.attach(fn);
  }
};
