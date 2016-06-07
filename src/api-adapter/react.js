var Node = require('basis.ui').Node;
var ClassView = require('./react/class-view.js');
var apiAdapter = require('./react/react-api-adapter.js');
var api = new basis.Token();

var InstanceView = Node.subclass({
  template: resource('./react/instance-view.tmpl'),
  binding: {
    name: 'name',
    loc: 'loc'
  }
});


function adoptAPI(reactApi) {
  // export API
  api.set(apiAdapter.api({
    reactApi: reactApi,
    ClassView: ClassView,
    InstanceView: InstanceView
  }));
}
// attach to React devtools
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

// provide ready function
module.exports = {
  ready: function (fn) {
    api.attach(fn);
  }
};
