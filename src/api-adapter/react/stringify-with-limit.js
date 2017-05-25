var hasOwnProperty = Object.prototype.hasOwnProperty;

function isReactElement(value) {
  if (!hasOwnProperty.call(value, '$$typeof')) {
    return false;
  }

  if (typeof Symbol === 'function' && Symbol.keyFor) {
    return Symbol.keyFor(value.$$typeof) === 'react.element';
  } else {
    return value.$$typeof === 0xeac7;
  }
}

function stringifyArray(value, str, limit) {
  str += '[ ';

  for (var i = 0; i < value.length; i++) {
    if (i !== 0) {
      str += ', ';
    }

    str = stringify(value[i], str, limit);

    if (str.length > limit) {
      return str;
    }
  }

  return str + ' ]';
}

function stringifyReactElement(value, str, limit) {
  var type = value.type;
  var name;

  str += '<';

  if (typeof type === 'function') {
    name = type.displayName || type.name;
  } else if (typeof type === 'string') {
    name = type;
  }

  str += name || 'Unknown';

  return str + ' />';
}

function stringifyObject(value, str, limit) {
  var shouldAddComma = false;

  str += '{ ';

  for (var prop in value) {
    if (hasOwnProperty.call(value, prop)) {
      if (shouldAddComma) {
        str += ', ';
      }

      str += prop + ': ';

      str = stringify(value[prop], str, limit);

      if (str.length > limit) {
        return str;
      }

      shouldAddComma = true;
    }
  }

  return str + ' }';
}

function stringifyFunction(value, str) {
  str += 'function';

  if (value.name) {
    str += ' ' + value.name.trim();
  }

  return str + '(){}';
}

function stringify(value, str, limit) {
  if (value === null) {
    return str + 'null';
  }

  if (Array.isArray(value)) {
    return stringifyArray(value, str, limit);
  }

  if (typeof value === 'object') {
    if (isReactElement(value)) {
      return stringifyReactElement(value, str, limit);
    } else {
      return stringifyObject(value, str, limit);
    }
  }

  if (typeof value === 'string') {
    return str + "'" + value + "'";
  }

  if (typeof value === 'function') {
    return stringifyFunction(value, str);
  }

  return str + String(value);
}

function sliceText(text, limit) {
  if (text.length > limit) {
    return text.slice(0, limit) + '…';
  } else {
    return text;
  }
}

module.exports = function stringifyWithLimit(value, limit) {
  return sliceText(stringify(value, '', limit), limit);
};

module.exports.sliceText = sliceText;
