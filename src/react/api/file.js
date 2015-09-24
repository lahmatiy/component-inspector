var openFile;

function isOpenFileSupported(){
  if (openFile) {
    return true;
  }

  var basisjsTools = typeof basisjsToolsFileSync != 'undefined' ? basisjsToolsFileSync : basis.devtools;
  if (basisjsTools && typeof basisjsTools.openFile == 'function')
  {
    openFile = function(filename){
      openFileByBasisjsTools(basisjsTools, filename);
    };
    return true;
  }

  if (typeof OPEN_FILE_URL == 'string')
  {
    openFile = openFileByUrl;
    return true;
  }
}

function openFileByBasisjsTools(host, filename){
  host.openFile(basis.path.resolve(filename.replace(/(:\d+:\d+):\d+:\d+$/, '$1')));
}

function openFileByUrl(filename){
  var xhr = new XMLHttpRequest();
  var url = OPEN_FILE_URL +
            (/\?/.test(OPEN_FILE_URL) ? '&' : '?') +
            'file=' + escape(filename);

  xhr.open('GET', url, false);
  // set if-modified-since header since begining prevents cache using;
  // otherwise browser could never ask server for new file content
  // and use file content from cache
  xhr.setRequestHeader('If-Modified-Since', new Date(0).toGMTString());
  xhr.send('');
}

module.exports = {
  isOpenFileSupported: isOpenFileSupported,
  openFile: function(filename){
    if (isOpenFileSupported())
      openFile(filename);
    else
      console.warn('`Open file in editor` is not supported');
  }
};
