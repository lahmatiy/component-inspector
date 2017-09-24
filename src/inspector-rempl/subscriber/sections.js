var Node = require('basis.ui').Node;
var ClassView = require('./section/class-view.js');
var TagInstanceView = require('./section/instance-view.js');
var openFile = require('./remote.js').getRemoteMethod('openFile');
var jsSourcePopup = require('./js-source-popup.js');
var hideTimer;

function openRefLocation(e) {
  var loc = e.target.getAttribute('data-loc');
  if (loc) {
    openFile(loc);
  }
}

function enterRefLocation(e) {
  var loc = e.target.getAttribute('data-loc');
  if (loc) {
    clearTimeout(hideTimer);
    jsSourcePopup.relElement = e.target;
    jsSourcePopup.loc.set(loc);
  }
}

function leaveRefLocation() {
  clearTimeout(hideTimer);
  hideTimer = setTimeout(function() {
    jsSourcePopup.loc.set();
  }, 100);
}

var templates = require('basis.template').define('inspector.info', {
  section: resource('./section/section.tmpl'),
  location: resource('./section/location.tmpl')
});

var Location = Node.subclass({
  template: templates.location,
  binding: {
    type: 'data:',
    loc: 'data:'
  }
});

var Section = Node.subclass({
  template: templates.section,
  binding: {
    name: 'name'
  },
  action: {
    openRefLocation: openRefLocation,
    enterRefLocation: enterRefLocation,
    leaveRefLocation: leaveRefLocation
  }
});

var DefaultSection = Section.subclass({
  name: 'Component',
  childClass: Location,
  init: function() {
    Node.prototype.init.call(this);
    if (Array.isArray(this.data.locations)) {
      this.setChildNodes(this.data.locations.map(function(data) {
        return { data: data };
      }));
    }
  }
});

var UnknownSection = Section.subclass({
  template: resource('./section/unknown.tmpl'),
  binding: {
    type: 'data:'
  }
});

var TagInstanceSection = Section.subclass({
  name: 'Instance definition',
  childClass: TagInstanceView,
  childNodes: [{}]
});

var ClassInfoSection = Section.subclass({
  name: 'Component class',
  childClass: ClassView,
  childNodes: [{}]
});

var HTMLSection = Section.subclass({
  html: '',
  binding: {
    content: 'html'
  }
});

module.exports = {
  Section: Section,
  HTMLSection: HTMLSection,
  DefaultSection: DefaultSection,
  ClassInfoSection: ClassInfoSection,
  TagInstanceSection: TagInstanceSection,
  UnknownSection: UnknownSection,
  byType: {
    'unknown': UnknownSection,
    'default': DefaultSection,
    'tag-instance-info': TagInstanceSection,
    'class-info': ClassInfoSection
  }
};
