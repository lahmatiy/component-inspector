var createApi = require('./react/create-api.js');
var subsciptions = [];
var reactApis = [];

// attach to React devtools
var oldHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (oldHook) {
  var oldInject = oldHook.inject;
  oldHook.inject = function(api) {
    notify(api);
    oldInject.apply(this, arguments);
  };
} else {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    inject: notify
  };
}

// notify subscribers
function notify(api) {
  api = createApi(api);
  reactApis.push(api);
  subsciptions.forEach(function(fn) {
    fn(api);
  });
}

// provide ready function
module.exports = {
  ready: function(fn) {
    subsciptions.push(fn);
    reactApis.forEach(function(api) {
      // use setTimeout for consistent behaviour
      setTimeout(function() {
        fn(api);
      }, 0);
    });
  }
};
