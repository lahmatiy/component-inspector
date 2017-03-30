var Value = require('basis.data').Value;
var Node = require('basis.ui').Node;
var MoveableElement = require('basis.dragdrop').MoveableElement;
var templateInspector = resource('../picker/index.js');
var inpageEnabled = templateInspector().inpageEnabled;
var settingsStorage = global.localStorage || {};
var SETTINGS_STORAGE_ID = 'component-inspector';
var settings = {};

function setSetting(name, value) {
  settings[name] = value;
  settingsStorage[SETTINGS_STORAGE_ID] = JSON.stringify(settings);
}

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

// var basisjsTools = global.basisjsToolsFileSync;
var isOnline = new basis.Token(false);

// if (basisjsTools &&
//     basisjsTools.isOnline &&
//     typeof basisjsTools.isOnline.attach == 'function') {
//   isOnline = new basis.Token(basisjsTools.isOnline.value);
//   basisjsTools.isOnline.attach(isOnline.set, isOnline);
// }

var panel = new Node({
  container: document.body,

  template: resource('./template/panel.tmpl'),
  binding: {
    isOnline: isOnline || basis.fn.$true,
    inpageEnabled: inpageEnabled,
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
      setSetting('panel-position', [
        parseInt(this.element.style.left),
        parseInt(this.element.style.top)
      ]);
    },
    toggleInpage: function() {
      inpageEnabled.set(!inpageEnabled.value);
      setSetting('inpage-disabled', !inpageEnabled.value);
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

try {
  settings = JSON.parse(settingsStorage[SETTINGS_STORAGE_ID]);
  if (!settings['panel-position']) {
    settings['panel-position'] = [10, 10];
  }
  panel.element.style.left = settings['panel-position'][0] + 'px';
  panel.element.style.top = settings['panel-position'][1] + 'px';
  inpageEnabled.set(!settings['inpage-disabled']);
} catch (e) {}

//
// exports
//

module.exports = panel;
