var remote = require('../remote.js');
var openFile = require('./file.js').openFile;
var getSourceFragment = require('./sourceFragment.js').getSourceFragment;

remote.provide({
  openFile: openFile,
  getSourceFragment: getSourceFragment
});
