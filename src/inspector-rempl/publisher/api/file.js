var openFileUrl;
var openFile;

function isOpenFileSupported() {
  if (openFile) {
    return true;
  }

  if (typeof OPEN_FILE_URL === 'string') {
    // eslint-disable-next-line no-undef
    openFileUrl = OPEN_FILE_URL;
    openFile = openFileByUrl;
    return true;
  }

  // eslint-disable-next-line no-undef
  var basisjsTools = typeof basisjsToolsFileSync !== 'undefined' ? basisjsToolsFileSync : basis.devtools;
  if (basisjsTools && typeof basisjsTools.openFile == 'function') {
    openFile = function(filename) {
      openFileByBasisjsTools(basisjsTools, filename);
    };
    return true;
  }
}

function openFileByBasisjsTools(host, filename) {
  host.openFile(basis.path.resolve(filename.replace(/(:\d+:\d+):\d+:\d+$/, '$1')));
}

function openFileByUrl(filename) {
  var xhr = new XMLHttpRequest();
  var url = openFileUrl +
            (/\?/.test(openFileUrl) ? '&' : '?') +
            'file=' + escape(filename);

  // async GET
  xhr.open('GET', url, true);
  // set if-modified-since header since begining prevents cache using
  xhr.setRequestHeader('If-Modified-Since', new Date(0).toGMTString());
  xhr.send('');
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
