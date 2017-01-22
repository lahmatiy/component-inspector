var rempl = require('rempl');
var INSPECTOR_URL = asset('/src/inspector-new/subscriber/index.html');
var INSPECTOR_BUILD_URL = asset('./unknown');

module.exports = rempl.createPublisher('Component Inspector', function(settings, callback) {
  /** @cut */ if (settings.dev) {
  /** @cut */   return callback(null, 'url', 'http://localhost:8000' + INSPECTOR_URL);
  /** @cut */ }

  global.basisjsToolsFileSync.getBundle(settings.dev ? INSPECTOR_URL : {
    build: INSPECTOR_BUILD_URL,
    filename: INSPECTOR_URL
  }, function(err, script) {
    callback(err, 'script', script);
  });
});

