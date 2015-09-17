var inspectBasis = basis;
var inspectBasisDomEvent = inspectBasis.require('basis.dom.event');

var Value = require('basis.data').Value;
var Node = require('basis.ui').Node;
var MoveableElement = require('basis.dragdrop').MoveableElement;
var templateInspector = resource('./inspector/template.js');

var currentInspector = new Value({
  handler: {
    change: function(sender, oldValue){
      if (oldValue)
        oldValue.stopInspect();
      if (this.value)
        this.value.startInspect();
    }
  }
});
var inspectMode = currentInspector.as(Boolean);
var currentInspectorName = currentInspector.as(function(inspector){
  return inspector ? inspector.name : '';
});

templateInspector.ready(function(inspector){
  inspector.inspectMode.link(null, function(value){
    if (value)
      currentInspector.set(inspector);
    else
      if (currentInspector.value === inspector)
        currentInspector.set();
  });
});


//
// panel
//

var isOnline;

if (typeof basisjsToolsFileSync != 'undefined')
{
  // new basisjs-tools
  isOnline = new basis.Token(basisjsToolsFileSync.isOnline.value);
  basisjsToolsFileSync.isOnline.attach(isOnline.set, isOnline);
}
else
{
  // old basisjs-tools
  isOnline = inspectBasis.devtools && Value.from(inspectBasis.devtools.serverState, 'update', 'data.isOnline');
}

var panel = new Node({
  container: document.body,
  activated: false,

  template: resource('./template/panel.tmpl'),
  binding: {
    activated: 'activated',
    isOnline: isOnline,
    inspectMode: inspectMode,
    inspector: currentInspectorName,
    inspectorId: currentInspectorName.as(function(inspectorName){
      return inspectorName
        ? inspectorName.replace(/\s/g, '').toLowerCase()
        : '';
    })
  },
  action: {
    inspectTemplate: function(e){
      e.die();
      currentInspector.set(templateInspector());
    },
    storePosition: function(){
      if (localStorage)
        localStorage['basis-devpanel'] = parseInt(this.element.style.left) + ';' + parseInt(this.element.style.top);
    },
    cancelInspect: function(){
      currentInspector.set();
    },
    reload: function(){
      global.location.reload();
    }
  },

  init: function(){
    Node.prototype.init.call(this);

    this.dde = new MoveableElement();
  },
  templateSync: function(){
    Node.prototype.templateSync.call(this);

    this.dde.setElement(this.element, this.tmpl.dragElement);
  },
  destroy: function(){
    this.dde.destroy();
    this.dde = null;

    Node.prototype.destroy.call(this);
  }
});


//
// drag stuff
//
if (typeof localStorage != 'undefined')
{
  var position = (localStorage['basis-devpanel'] || '10;10').split(';');
  panel.element.style.left = position[0] + 'px';
  panel.element.style.top = position[1] + 'px';
}


//
// exports
//

module.exports = panel;
