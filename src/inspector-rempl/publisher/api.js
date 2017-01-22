var hasOwnProperty = Object.prototype.hasOwnProperty;
var api = {
  set: function(extension) {
    for (var key in extension) {
      if (hasOwnProperty.call(extension, key)) {
        api[key] = typeof extension[key] == 'function'
          ? extension[key].bind(this)
          : extension[key];
      }
    }
  }
};

api.set(require('./api/default.js'));

module.exports = api;
