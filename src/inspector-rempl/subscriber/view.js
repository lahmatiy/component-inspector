var DataObject = require('basis.data').Object;
var Node = require('basis.ui').Node;
var sidebar = require('./sidebar/index.js');
var DomTree = require('./dom-tree/index.js');
var noData = new DataObject();
var remoteDomTree = require('./remote.js').ns('dom-tree');

var view = new Node({
  template: resource('./template/view.tmpl'),
  binding: {
    hasSubject: {
      events: 'update',
      getter: function(node) {
        return Boolean(node.data.tree);
      }
    },
    sourceTitle: 'data:',
    upName: 'data:',
    domTree: 'satellite:',
    sidebar: 'satellite:'
  },
  action: {
    up: function() {
      remoteDomTree.callRemote('up');
    },
    reset: function() {
      remoteDomTree.callRemote('reset');
    },
    logInfo: function() {
      remoteDomTree.callRemote('logInfo');
    }
  },
  satellite: {
    domTree: DomTree,
    sidebar: sidebar
  }
});

remoteDomTree.subscribe(function(data) {
  if (data) {
    view.update(data);
  } else {
    // clear data
    // Note: basis.js has no method to reset data, therefore we use hack
    // by setting a delegate with empty data and then reset a delegate
    // to avoid its corruption
    view.setDelegate(noData);
    view.setDelegate();
  }
});

module.exports = view;
