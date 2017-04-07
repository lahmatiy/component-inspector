var rempl = require('rempl');
var Node = require('basis.ui').Node;
var appRoot = new Node({
  template: resource('./template/app.tmpl'),
  binding: {
    view: 'satellite:'
  }
});

require('basis.app').create(appRoot);

rempl.getSubscriber().connected.link(function(connected) {
  if (connected) {
    appRoot.setSatellite('view', require('./view.js'));
  }
});

// rempl.getSubscriber().ns('dom-tree').subscribe(function(data) {
//   console.log(data);
// });
