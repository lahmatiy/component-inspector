var Value = require('basis.data').Value;
var Node = require('basis.ui').Node;
var Popup = require('basis.ui.popup').Popup;
var getColoredSource = require('basis.utils.source').getColoredSource;

module.exports = new Popup({
  loc: new Value(),

  dir: 'top left bottom left',
  autorotate: [
    'bottom left top left',
    'top right top left'
  ],
  template: resource('./template/js-source-popup.tmpl'),
  binding: {
    loc: function(node){
      return node.loc.as(function(loc){
        return (loc || '').replace(/(:\d+){1,4}$/, '');
      });
    },
    source: function(node){
      return node.loc.as(function(loc){
        if (loc)
          return getColoredSource(loc, 0, 0, 10);
      });
    }
  },

  zIndex: 65000,
  setZIndex: function(){
    this.element.style.zIndex = this.zIndex;
  }
});
