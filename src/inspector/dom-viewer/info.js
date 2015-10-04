var api = require('../api.js');
var jsSourcePopup = require('./js-source-popup.js');
var Node = require('basis.ui').Node;

function openRefLocation(e){
  var loc = e.target.getAttribute('data-loc');
  if (loc) {
    api.openFile(loc);
  }
}
function enterRefLocation(e){
  var loc = e.target.getAttribute('data-loc');
  if (loc) {
    jsSourcePopup.loc.set(loc);
    jsSourcePopup.show(e.actionTarget);
  }
}
function leaveRefLocation(){
  jsSourcePopup.hide();
}

var templates = require('basis.template').define('inspector.info', {
  section: resource('./template/info-section.tmpl'),
  location: resource('./template/info-location.tmpl')
});

var InfoSection = Node.subclass({
  template: templates.section,
  binding: {
    name: 'name'
  },
  childClass: {
    template: templates.location,
    binding: {
      type: 'type',
      loc: 'loc'
    },
    action: {
      openRefLocation: openRefLocation,
      enterRefLocation: enterRefLocation,
      leaveRefLocation: leaveRefLocation
    }
  },
  init: function(){
    this.childNodes = this.locations || this.childNodes;
    Node.prototype.init.call(this);
  }
});

module.exports = InfoSection;
