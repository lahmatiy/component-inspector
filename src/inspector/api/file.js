var openFile;

function isOpenFileSupported() {
  if (openFile) {
    return true;
  }

  var basisjsTools = global.basisjsToolsFileSync || basis.devtools;
  if (basisjsTools && typeof basisjsTools.openFile == 'function') {
    openFile = function(filename) {
      openFileByBasisjsTools(basisjsTools, filename);
    };
    return true;
  }

  if (typeof OPEN_FILE_URL == 'string') {
    openFile = openFileByUrl;
    return true;
  }
}

function openFileByBasisjsTools(host, filename) {
  host.openFile(basis.path.resolve(filename.replace(/(:\d+:\d+):\d+:\d+$/, '$1')));
}

function openFileByUrl(filename) {
  var xhr = new XMLHttpRequest();
  var url = global.OPEN_FILE_URL +
            (/\?/.test(global.OPEN_FILE_URL) ? '&' : '?') +
            'file=' + escape(filename);

  // async GET to url
  xhr.open('GET', url, true);
  // set if-modified-since header since begining prevents cache using;
  // otherwise browser could never ask server for new file content
  // and use file content from cache
  xhr.setRequestHeader('If-Modified-Since', new Date(0).toGMTString());
  xhr.send('');
}

module.exports = {
  isOpenFileSupported: isOpenFileSupported,
  openFile: function(filename) {
    if (this.isOpenFileSupported()) {
      openFile(filename);
    } else {
      console.warn('`Open file in editor` is not supported');
    }
  }
};
