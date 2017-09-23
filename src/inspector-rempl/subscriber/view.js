var DataObject = require('basis.data').Object;
var Node = require('basis.ui').Node;
var sections = require('./sections.js');
var DomTree = require('./dom-tree.js');
var noData = new DataObject();
var remoteApi = require('remote').ns('dom-tree');

// var defaultSection = {
//   name: 'Component',
//   childNodes: [
//     {
//       type: 'instance',
//       loc: selectedInstance.as(api.getInstanceLocation)
//     },
//     {
//       type: 'class',
//       loc: selectedInstance.as(function getRefClassLoc(instance) {
//         var cls = api.getInstanceClass(instance);
//         return api.getLocation(cls);
//       })
//     },
//     {
//       type: 'render',
//       loc: selectedInstance.as(api.getInstanceRenderLocation)
//     }
//   ]
// };

var info = new Node({
  childClass: sections.Section
});

// var sectionFactory = {
//   html: function(name, html) {
//     return new sections.HTMLSection({
//       name: name || '',
//       html: String(html)
//     });
//   },
//   dom: function(name, element) {
//     return new sections.DOMSection({
//       name: name || '',
//       dom: element
//     });
//   }
// };

// selectedInstance.attach(function(instance) {
//   if (!instance) {
//     info.setChildNodes();
//     return;
//   };

//   var base = api.showDefaultInfo(instance) ? [defaultSection] : [];
//   info.setChildNodes(base.concat(
//     api.getAdditionalInstanceInfo(instance, sectionFactory) || []
//   ));
// });

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
    info: 'satellite:'
  },
  action: {
    up: function() {
      remoteApi.callRemote('up');
    },
    reset: function() {
      remoteApi.callRemote('reset');
    },
    logInfo: function() {
      remoteApi.callRemote('logInfo');
    }
  },
  satellite: {
    domTree: DomTree,
    info: info
  }
});

remoteApi.subscribe(function(data) {
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
