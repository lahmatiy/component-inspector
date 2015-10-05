var api = require('../api.js');
var jsSourcePopup = require('./js-source-popup.js');
var Node = require('basis.ui').Node;
var hideTimer;

function openRefLocation(e){
  var loc = e.target.getAttribute('data-loc');
  if (loc) {
    api.openFile(loc);
  }
}
function enterRefLocation(e){
  var loc = e.target.getAttribute('data-loc');
  if (loc) {
    clearTimeout(hideTimer);
    jsSourcePopup.loc.set(loc);
    jsSourcePopup.show(e.target);
  }
}
function leaveRefLocation(){
  clearTimeout(hideTimer);
  hideTimer = setTimeout(function(){
    jsSourcePopup.hide()
  }, 100);
}

var templates = require('basis.template').define('inspector.info', {
  section: resource('./template/info-section.tmpl'),
  location: resource('./template/info-location.tmpl')
});

var Location = Node.subclass({
  template: templates.location,
  binding: {
    type: 'type',
    loc: 'loc'
  }
});

var InfoSection = Node.subclass({
  template: templates.section,
  binding: {
    name: 'name'
  },
  action: {
    openRefLocation: openRefLocation,
    enterRefLocation: enterRefLocation,
    leaveRefLocation: leaveRefLocation
  },
  childFactory: function(config){
    return new Location(config);
  },
  init: function(){
    this.childNodes = this.locations || this.childNodes;
    Node.prototype.init.call(this);
  }
});

module.exports = InfoSection;
