var remote = require('../remote.js');
var openFile = require('./file.js').openFile;
var getColoredSource = require('basis.utils.source').getColoredSource;

remote.define({
  openFile: openFile,
  getColoredSource: function(loc, callback) {
    if (loc) {
      return callback(getColoredSource(loc, 0, 0, 10));
    }

    callback(null);
  }
});
