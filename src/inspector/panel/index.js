var Value = require('basis.data').Value;
var Node = require('basis.ui').Node;
var MoveableElement = require('basis.dragdrop').MoveableElement;
var templateInspector = resource('../picker/index.js');
var localStorage = global.localStorage || {};
var STORAGE_ID = 'component-inspector';

var currentInspector = new Value({
  handler: {
    change: function(sender, oldValue) {
      if (oldValue) {
        oldValue.stopInspect();
      }
      if (this.value) {
        this.value.startInspect();
      }
    }
  }
});
var inspectMode = currentInspector.as(Boolean);
var currentInspectorName = currentInspector.as(function(inspector) {
  return inspector ? inspector.name : '';
});

templateInspector.ready(function(inspector) {
  inspector.inspectMode.link(null, function(value) {
    if (value) {
      currentInspector.set(inspector);
    } else {
      if (currentInspector.value === inspector) {
        currentInspector.set();
      }
    }
  });
});


//
// panel
//

var basisjsTools = global.basisjsToolsFileSync;
var isOnline;

if (basisjsTools &&
    basisjsTools.isOnline &&
    typeof basisjsTools.isOnline.attach == 'function') {
  isOnline = new basis.Token(basisjsTools.isOnline.value);
  basisjsTools.isOnline.attach(isOnline.set, isOnline);
}

var panel = new Node({
  container: document.body,

  template: resource('./template/panel.tmpl'),
  binding: {
    isOnline: isOnline || basis.fn.$true,
    inspectMode: inspectMode,
    inspector: currentInspectorName,
    inspectorId: currentInspectorName.as(function(inspectorName) {
      return inspectorName
        ? inspectorName.replace(/\s/g, '').toLowerCase()
        : '';
    })
  },
  action: {
    inspectTemplate: function(e) {
      e.die();
      currentInspector.set(templateInspector());
    },
    storePosition: function() {
      localStorage[STORAGE_ID] = parseInt(this.element.style.left) + ';' + parseInt(this.element.style.top);
    },
    cancelInspect: function() {
      currentInspector.set();
    },
    reload: function() {
      global.location.reload();
    }
  },

  init: function() {
    Node.prototype.init.call(this);

    this.dde = new MoveableElement();
  },
  templateSync: function() {
    Node.prototype.templateSync.call(this);

    this.dde.setElement(this.element, this.tmpl.dragElement);
  },
  destroy: function() {
    this.dde.destroy();
    this.dde = null;

    Node.prototype.destroy.call(this);
  }
});


//
// drag&drop stuff
//
if (typeof localStorage != 'undefined') {
  var position = (localStorage[STORAGE_ID] || '10;10').split(';');
  panel.element.style.left = position[0] + 'px';
  panel.element.style.top = position[1] + 'px';
}


//
// exports
//

module.exports = panel;
