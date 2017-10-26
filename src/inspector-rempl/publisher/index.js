module.exports = basis.fn.runOnce(function(api) {
  require('./api.js').set(api);
  require('./panel/index.js');
  require('./remote.js');
  require('./api/remote.js');
});
