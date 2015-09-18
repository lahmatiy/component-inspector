var fileAPI = require('../../api/file.js');
var Node = require('basis.ui').Node;
var SINGLETON = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source'];
var jsSourcePopup = require('./js-source-popup.js');
var templateSwitcher = require('basis.template').switcher;

function memo(fn, oldValue){
  return function(newValue){
    var result = fn(newValue, oldValue);
    oldValue = newValue;
    return result;
  }
}

var showLocNode = new basis.Token();
showLocNode.attach(memo(function(node, oldNode){
  if (oldNode)
  {
    oldNode.showLoc = false;
    oldNode.updateBind('showLoc');
  }

  if (node)
  {
    jsSourcePopup.loc.set(node.loc);
    jsSourcePopup.show(node.element);
    node.showLoc = true;
    node.updateBind('showLoc');
  }
  else
  {
    jsSourcePopup.hide();
  }
}));

var DOMNode = Node.subclass({
  action: {
    enter: function(){
      if (this.loc)
        showLocNode.set(this);
    },
    leave: function(){
      var cursor = this.parentNode;
      while (cursor && cursor instanceof DOMNode)
      {
        if (cursor.loc)
        {
          showLocNode.set(cursor);
          return;
        }
        cursor = cursor.parentNode;
      }

      showLocNode.set();
    },
    inspect: function(){
      if (this.selectDomNode && this.domNode)
      {
        this.selectDomNode(this.domNode);
      }
      else
      {
        if (showLocNode.value && showLocNode.value.loc)
          fileAPI.openFile(showLocNode.value.loc);
      }
    }
  },
  destroy: function(){
    Node.prototype.destroy.call(this);

    // clean up references
    for (var property in this)
      if (hasOwnProperty.call(this, property))
        if (this[property] && typeof this[property] == 'object')
          this[property] = null;
  }
});

var ValuePart = DOMNode.subclass({
  type: 'static',
  template: templateSwitcher(function(node){
    return node.type == 'static'
      ? resource('./template/tree/attribute-value-static.tmpl')
      : resource('./template/tree/attribute-value.tmpl');
  }),
  binding: {
    type: 'type',
    value: 'value',
    l10n: 'l10n || ""',
    loc: 'loc || ""'
  },
  action: {
    openLoc: function(){
      if (this.loc)
        fileAPI.openFile(this.loc);
    }
  }
});

var Attribute = DOMNode.subclass({
  template: resource('./template/tree/attritube.tmpl'),
  binding: {
    name: 'name'
  },
  childClass: ValuePart
});

var Element = DOMNode.subclass({
  template: resource('./template/tree/element.tmpl'),
  binding: {
    showLoc: 'showLoc',
    name: 'name',
    binding: 'bindingName',
    nestedView: 'nestedView',
    componentName: 'componentName',
    childrenHidden: 'childrenHidden',
    inline: 'inlineChildren',
    attributes: 'satellite:',
    singleton: function(node){
      return SINGLETON.indexOf(node.name) != -1;
    }
  },
  satellite: {
    attributes: {
      instance: Node.subclass({
        template: resource('./template/tree/attritubes.tmpl'),
        childClass: Attribute
      }),
      config: function(owner){
        return {
          childNodes: owner.attributes
        };
      }
    }
  }
});

var Text = DOMNode.subclass({
  template: resource('./template/tree/text.tmpl'),
  binding: {
    value: 'value',
    binding: 'bindingName',
    l10n: 'l10n',
    nestedView: 'nestedView'
  }
});

var Comment = DOMNode.subclass({
  template: resource('./template/tree/comment.tmpl'),
  binding: {
    value: 'value',
    binding: 'bindingName',
    nestedView: 'nestedView'
  }
});

function buildAttribute(attr, attrBindings, actions){
  var value = [{
    type: 'static',
    value: attr.value
  }];

  if (value.length == 1 && value[0].type == 'static' && !value[0].value)
    value = [];

  return {
    name: attr.name,
    childNodes: value
  };
}

module.exports = function buildNode(item, bindings, actions, selectDomNode){
  function findBinding(node){
    return basis.array.search(bindings, node, 'dom');
  }

  function findNodeBinding(node){
    return basis.array.search(bindings, true, function(binding){
      return binding.val !== binding.dom && binding.val === node;
    });
  }

  var node = item[0];
  var children = item[1];
  var properties = item[2];
  var binding;

  switch (node.nodeType)
  {
    case 1:
      var binding = findNodeBinding(node);
      var nestedView = properties.nestedView;
      var attributes = basis.array(node.attributes).filter(function(attr){
        return attr.name != 'data-reactid';
      })
      var attrs;
      var inline;
      var componentName;
      var loc;

      if (binding && binding.binding == 'element')
        binding = null;

      attrs = binding || nestedView
        ? attributes.map(function(attr){
            return {
              name: attr.name,
              childNodes: [
                {
                  type: 'static',
                  value: attr.value
                }
              ]
            };
          })
        : attributes.map(function(attr){
            return buildAttribute(attr, bindings.filter(function(bind){
              return bind.dom === node && bind.attr === attr.name;
            }), actions);
          });

      children = children.map(function(child){
        return buildNode(child, bindings, actions, selectDomNode);
      });

      inline =
        children.every(function(node){
          return node instanceof Text;
        }) &&
        children.reduce(function(res, node){
          return res + node.value.length;
        }, 0) < 32;

      if (nestedView)
      {
        var component = basis.reactApi.getComponent(node);
        componentName = component ? basis.reactApi.getInfo(component.element).name : '';
      }

      var instance = basis.reactApi.getInstanceByNode(node);
      if (instance)
      {
        var locHost = (instance.element._renderedComponent || instance.element);
        loc = basis.dev.getInfo(locHost._currentElement, 'loc');
      }

      return new Element({
        domNode: node,
        name: node.tagName.toLowerCase(),
        bindingName: binding ? binding.binding : null,
        childrenHidden: node.firstChild && !children.length,
        inlineChildren: inline,
        nestedView: nestedView,
        componentName: componentName,
        selectDomNode: nestedView ? selectDomNode : null,
        attributes: attrs,
        childNodes: children,
        loc: loc
      });

      break;
    case 3:
      binding = findBinding(node) || findNodeBinding(node);

      if (/^\s*[\r\n]+\s*$/.test(node.nodeValue))
        return '';

      return new Text({
        domNode: node,
        bindingName: binding && !binding.l10n ? binding.binding : null,
        value: node.nodeValue,
        l10n: binding ? binding.l10n : false,
        nestedView: properties.nestedView,
        selectDomNode: properties.nestedView ? selectDomNode : null
      });

    case 8:
      binding = findNodeBinding(node);

      return new Comment({
        domNode: node,
        bindingName: binding ? binding.binding : null,
        value: node.nodeValue,
        nestedView: properties.nestedView,
        selectDomNode: properties.nestedView ? selectDomNode : null
      });
  }

  return '';
};
