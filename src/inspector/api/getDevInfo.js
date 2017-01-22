module.exports = function(ref, property) {
  var apiName = typeof DEVINFO_API_NAME == 'string' ? global.DEVINFO_API_NAME : '$devinfo';
  var getInfo = (global[apiName] && global[apiName].get) || basis.dev.getInfo;

  if (typeof getInfo == 'function') {
    var info = getInfo(ref);

    if (property) {
      return info ? info[property] : undefined;
    }

    return info;
  }
};
