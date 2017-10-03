var Node = require('basis.ui').Node;
var remoteDetails = require('../remote.js').ns('details');
var sections = require('./sections.js');

var sidebar = new Node({
  childClass: sections.Section,
  childFactory: function(section) {
    var ChildClass = sections.byType[section.type] || sections.UnknownSection;
    return new ChildClass({
      data: section
    });
  }
});

remoteDetails.subscribe(function(data) {
  sidebar.setChildNodes(data);
});

module.exports = sidebar;
