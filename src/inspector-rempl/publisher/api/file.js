/* global OPEN_FILE_URL, basisjsToolsFileSync */

var openFile;

function isOpenFileSupported() {
  if (typeof openFile === 'function') {
    return true;
  }

  var openFileUrl = typeof OPEN_FILE_URL === 'string' ? OPEN_FILE_URL : false;
  var meta = document.querySelector('meta[name="open-in-editor"]');

  if (!openFileUrl && meta && meta.hasAttribute('content')) {
    openFileUrl = meta.getAttribute('content') || false;
  }

  if (openFileUrl) {
    openFile = function(filename) {
      var xhr = new XMLHttpRequest();
      var url = openFileUrl +
                (/\?/.test(openFileUrl) ? '&' : '?') +
                'file=' + escape(filename);

      // async GET
      xhr.open('GET', url, true);
      // set if-modified-since header since begining prevents cache using
      xhr.setRequestHeader('If-Modified-Since', new Date(0).toGMTString());
      xhr.send('');
    };
    return true;
  }

  var basisjsTools = typeof basisjsToolsFileSync !== 'undefined' ? basisjsToolsFileSync : basis.devtools;
  if (basisjsTools && typeof basisjsTools.openFile == 'function') {
    openFile = function(filename) {
      basisjsTools.openFile(basis.path.resolve(filename.replace(/(:\d+:\d+):\d+:\d+$/, '$1')));
    };
    return true;
  }

  return false;
}

module.exports = {
  isOpenFileSupported: isOpenFileSupported,
  openFile: function(filename) {
    if (isOpenFileSupported()) {
      openFile(filename);
    } else {
      console.warn('`Open file in editor` is not supported');
    }
  }
};
