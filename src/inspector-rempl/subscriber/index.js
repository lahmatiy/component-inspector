var rempl = require('rempl');
var Node = require('basis.ui').Node;
var appRoot = new Node({
  template: resource('./template/app.tmpl'),
  binding: {
    view: 'satellite:'
  }
});

require('basis.app').create(appRoot);

rempl.getSubscriber(function(subscriber) {
  subscriber.ns('dom-tree').subscribe(function(data) {
    console.log(data);
  });

  appRoot.setSatellite('view', require('./view.js'));
});
