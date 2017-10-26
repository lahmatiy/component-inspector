/* global SOURCE_FRAGMENT_URL */

var getSourceFragment;

function isSourceFragmentSupported() {
  if (typeof getSourceFragment === 'function') {
    return true;
  }

  var getSourceFragmentUrl = typeof SOURCE_FRAGMENT_URL === 'string' ? SOURCE_FRAGMENT_URL : false;
  var meta = document.querySelector('meta[name="source-fragment"]');

  if (!getSourceFragmentUrl && meta && meta.hasAttribute('content')) {
    getSourceFragmentUrl = meta.getAttribute('content') || false;
  }

  if (getSourceFragmentUrl) {
    getSourceFragment = function(loc, callback) {
      var xhr = new XMLHttpRequest();
      var url = getSourceFragmentUrl +
                (/\?/.test(getSourceFragmentUrl) ? '&' : '?') +
                'loc=' + escape(loc);

      xhr.onload = function() {
        callback(xhr.responseText);
      };

      // async GET
      xhr.open('GET', url, true);
      // set if-modified-since header since begining prevents cache using
      xhr.setRequestHeader('If-Modified-Since', new Date(0).toGMTString());
      xhr.send('');
    };
    return true;
  }

  return false;
}

module.exports = {
  isSourceFragmentSupported: isSourceFragmentSupported,
  getSourceFragment: function(loc, callback) {
    if (!isSourceFragmentSupported()) {
      return callback('Source preview is not supported');
    }

    if (!loc) {
      return callback('Missed loc parameter for getSourceFragment');
    }

    getSourceFragment(loc, callback);
  }
};
