var Value = require('basis.data').Value;
var Popup = require('basis.ui.popup').Popup;
var getColoredSource = require('basis.utils.source').getColoredSource;
var api = require('../api.js');

module.exports = new Popup({
  loc: new Value(),

  dir: 'top left bottom left',
  autorotate: [
    'bottom left top left',
    'top right top left'
  ],
  template: resource('./template/js-source-popup.tmpl'),
  binding: {
    isOpenFileSupported: api.isOpenFileSupported,
    loc: function(node) {
      return node.loc.as(function(loc) {
        return (loc || '').replace(/(:\d+){1,4}$/, '');
      });
    },
    source: function(node) {
      return node.loc.as(function(loc) {
        if (loc) {
          return getColoredSource(loc, 0, 0, 10);
        }
      });
    }
  },

  setZIndex: function() {
    this.element.style.zIndex = 65000;
  }
});
