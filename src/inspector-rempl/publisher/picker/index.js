var domUtils = require('basis.dom');
var domEventUtils = require('basis.dom.event');
var setStyle = require('basis.cssom').setStyle;
var getBoundingRect = require('basis.layout').getBoundingRect;
var Value = require('basis.data').Value;
var Balloon = require('basis.ui.popup').Balloon;
var remote = require('../remote.js');
var rempl = require('rempl');
var inpageEnabled = new Value({ value: true });

var api = require('../api.js');
var selectedNode = require('../data/watcher.js');

Value.from(selectedNode).link(rempl.getHost(), function(node) {
  if (node) {
    if (inpageEnabled.value) {
      this.activate(remote.id);
    }
  } else {
    this.deactivate(remote.id);
  }
});
inpageEnabled.link(rempl.getHost(), function(value) {
  if (!value) {
    this.deactivate(remote.id);
  }
});

var document = global.document;

var inspectDepth = 0;
var inspectMode = new Value({ value: false });

var overlay = domUtils.createElement({
  css: {
    pointerEvents: 'none',
    transition: 'all .05s',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    background: 'rgba(110,163,217,0.7)'
  }
});
var boxElement = domUtils.createElement({
  css: {
    visibility: 'hidden',
    position: 'absolute'
  }
});

function pickHandler(event) {
  event.die();

  if (event.mouseRight) {
    stopInspect();
    return;
  }

  var target = pickupTarget.value;

  if (target) {
    stopInspect();

    if (event.altKey) {
      var loc = api.getInstanceLocation(target.instance);

      if (!loc) {
        basis.dev.warn('Instance create location doesn\'t resolved:', target);
        return;
      }

      api.openFile(loc);
      return;
    }

    selectedNode.set(target.node);
  }
}

var pickupTarget = new Value({
  handler: {
    change: function() {
      var target = this.value || null;

      if (target) {
        var rectNode = target.node;
        var rect;

        if (rectNode.nodeType == 3) {
          rectNode = document.createRange();
          rectNode.selectNodeContents(target.node);
        }

        rect = getBoundingRect(rectNode);

        if (rect) {
          var style = {
            left: rect.left + 'px',
            top: rect.top + 'px',
            width: rect.width + 'px',
            height: rect.height + 'px'
          };
          setStyle(overlay, style);
          setStyle(boxElement, style);
          document.body.appendChild(overlay);
          document.body.appendChild(boxElement);
        }
      } else {
        domUtils.remove(overlay);
        domUtils.remove(boxElement);
        inspectDepth = 0;
      }

      nodeInfoPopup().update({
        node: target && target.node,
        instance: target && target.instance
      });
    }
  }
});

var nodeInfoPopup = basis.fn.lazyInit(function() {
  return new Balloon({
    dir: 'left bottom left top',
    template: resource('./template/hint-popup.tmpl'),
    autorotate: [
      'left top left bottom',
      // 'center center center center',
      // 'left top left top',
      // 'left bottom left bottom',
      'right bottom right top',
      'right top right bottom'
      // 'right bottom right bottom',
      // 'right top right top'
    ],
    binding: {
      openFileSupported: api.isOpenFileSupported,
      name: {
        events: 'delegateChanged update',
        getter: function(node) {
          return api.getComponentNameByNode(node.data.node);
        }
      },
      instanceLocation: {
        events: 'delegateChanged update',
        getter: function(node) {
          return api.getInstanceLocation(node.data.instance);
        }
      }
    },
    handler: {
      update: function() {
        if (this.data.node) {
          this.show(boxElement);
        } else {
          this.hide();
        }
      },
      hide: function() {
        this.update({
          tmpl: null
        });
      }
    }
  });
});

function contextmenuHandler(e) {
  e.die();
  stopInspect();
}

function startInspect() {
  if (!inspectMode.value) {
    selectedNode.set();

    domEventUtils.addGlobalHandler('mousemove', mousemoveHandler);
    domEventUtils.addGlobalHandler('mousewheel', mouseWheelHandler);
    domEventUtils.addGlobalHandler('wheel', mouseWheelHandler);
    domEventUtils.addGlobalHandler('DOMMouseScroll', mouseWheelHandler);
    domEventUtils.addGlobalHandler('mousedown', domEventUtils.kill);
    domEventUtils.addGlobalHandler('mouseup', domEventUtils.kill);
    domEventUtils.addGlobalHandler('contextmenu', contextmenuHandler);
    domEventUtils.addGlobalHandler('click', pickHandler);

    inspectMode.set(true);
  }
}

function stopInspect() {
  if (inspectMode.value) {
    domEventUtils.removeGlobalHandler('mousemove', mousemoveHandler);
    domEventUtils.removeGlobalHandler('mousewheel', mouseWheelHandler);
    domEventUtils.removeGlobalHandler('wheel', mouseWheelHandler);
    domEventUtils.removeGlobalHandler('DOMMouseScroll', mouseWheelHandler);
    domEventUtils.removeGlobalHandler('mousedown', domEventUtils.kill);
    domEventUtils.removeGlobalHandler('mouseup', domEventUtils.kill);
    domEventUtils.removeGlobalHandler('contextmenu', contextmenuHandler);
    domEventUtils.removeGlobalHandler('click', pickHandler);

    inspectMode.set(false);
    pickupTarget.set();
  }
}

var DEPTH_MODE_MOVE_THRESHOLD = 8;
var lastMouseX;
var lastMouseY;

function mousemoveHandler(event) {
  var dx = Math.abs(event.mouseX - lastMouseX);
  var dy = Math.abs(event.mouseY - lastMouseY);
  var cursor = event.sender;

  if (inspectDepth && lastMouseX && dx < DEPTH_MODE_MOVE_THRESHOLD && dy < DEPTH_MODE_MOVE_THRESHOLD) {
    return;
  }

  lastMouseX = event.mouseX;
  lastMouseY = event.mouseY;

  while (cursor) {
    if (api.isComponentRootNode(cursor)) {
      pickupTarget.set({
        node: cursor,
        instance: api.getInstanceByNode(cursor)
      });
      return;
    }

    cursor = cursor.parentNode;
  }

  pickupTarget.set();
}

function mouseWheelHandler(event) {
  var delta = event.wheelDelta;
  var sender = event.sender;
  var cursor = sender;

  var tempDepth = inspectDepth + delta;
  var curDepth = 0;
  var lastNode;
  var lastDepth;

  do {
    if (api.isComponentRootNode(cursor)) {
      lastDepth = curDepth;
      lastNode = cursor;

      if (tempDepth < 0 || curDepth == tempDepth) {
        break;
      }

      curDepth++;
    }
  } while (cursor = cursor.parentNode);

  inspectDepth = lastDepth;
  pickupTarget.set(lastNode
    ? {
        node: lastNode,
        instance: api.getInstanceByNode(lastNode)
      }
    : null
  );

  event.die();
}

//
//  exports
//
module.exports = {
  name: 'Component',
  inpageEnabled: inpageEnabled,
  startInspect: startInspect,
  stopInspect: stopInspect,
  inspectMode: inspectMode,
  isActive: function() {
    return inspectMode.value;
  }
};
