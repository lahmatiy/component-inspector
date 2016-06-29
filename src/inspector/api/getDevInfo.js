module.exports = function(ref, property) {
  var apiName = typeof DEVINFO_API_NAME == 'string' ? DEVINFO_API_NAME : '$devinfo';
  var getInfo = (window[apiName] && window[apiName].get) || basis.dev.getInfo;

  if (typeof getInfo == 'function') {
    var info = getInfo(ref);

    if (property) {
      return info ? info[property] : undefined;
    }

    return info;
  }
};
