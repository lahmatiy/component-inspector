var Node = require('basis.ui').Node;
var remote = require('remote');
var appRoot = new Node({
  template: resource('./template/app.tmpl'),
  binding: {
    view: 'satellite:'
  }
});

require('basis.app').create(appRoot);

remote.connected.link(function(connected) {
  if (connected) {
    appRoot.setSatellite('view', require('./view.js'));
  }
});

// remote.ns('dom-tree').subscribe(function(data) {
//   console.log(data);
// });
