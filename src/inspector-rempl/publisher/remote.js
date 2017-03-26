var rempl = require('rempl');

module.exports = rempl.createPublisher('Component Inspector', function(settings, callback) {
  // jscs:disable
  /** @cut */ return callback(null, 'url', 'http://localhost:8000/src/inspector-rempl/subscriber/index.html');
  // jscs:enable

  callback(null, 'script', asset('/dist/subscriber.js', true));
});

