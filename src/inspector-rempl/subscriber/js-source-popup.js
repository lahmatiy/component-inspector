var Value = require('basis.data').Value;
var Popup = require('basis.ui.popup').Popup;
var rempl = require('rempl');
var sourceLoc = new Value();
var source = new basis.Token('');

rempl.getSubscriber(function(remote) {
  sourceLoc.as(function(loc) {
    if (loc) {
      remote.invoke('getColoredSource', loc, function(result) {
        if (loc === sourceLoc.value) {
          source.set(result);
        }
      });
    }
    source.set('');
  });
});

module.exports = new Popup({
  loc: sourceLoc,

  dir: 'top left bottom left',
  autorotate: [
    'bottom left top left',
    'top right top left'
  ],
  template: resource('./template/js-source-popup.tmpl'),
  binding: {
    isOpenFileSupported: basis.fn.$const(true), // FIXME: use real value
    loc: sourceLoc.as(function(loc) {
      return (loc || '').replace(/(:\d+){1,4}$/, '');
    }),
    source: source
  },

  setZIndex: function() {
    this.element.style.zIndex = 65000;
  }
});
