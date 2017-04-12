var wrapData = require('basis.data').wrap;
var Node = require('basis.ui').Node;
var templateSwitcher = require('basis.template').switcher;
var remplSubscriber = require('rempl').getSubscriber();
var openFile = remplSubscriber.getRemoteMethod('openFile');
var selectNodeById = remplSubscriber.ns('dom-tree').getRemoteMethod('selectNodeById');

var jsSourcePopup = resource('./js-source-popup.js');
var SINGLETON = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source'];
var NodeClassByType = {};

function memo(fn, oldValue) {
  return function(newValue) {
    var result = fn(newValue, oldValue);
    oldValue = newValue;
    return result;
  };
}

var showLocNode = new basis.Token();
showLocNode.attach(memo(function(node, oldNode) {
  if (oldNode) {
    oldNode.showLoc = false;
    oldNode.updateBind('showLoc');
  }

  if (node) {
    jsSourcePopup().loc.set(node.data.loc);
    jsSourcePopup().show(node.element);
    node.showLoc = true;
    node.updateBind('showLoc');
  } else {
    jsSourcePopup().hide();
  }
}));

function childFactory(config) {
  var ChildClass = NodeClassByType[config.type] || this.childClass;

  return new ChildClass({
    data: config,
    childNodes: config.childNodes
  });
}

var DOMNode = Node.subclass({
  action: {
    enter: function() {
      if (this.data.loc) {
        showLocNode.set(this);
      }
    },
    leave: function() {
      var cursor = this.parentNode;
      while (cursor && cursor instanceof DOMNode) {
        if (cursor.data.loc) {
          showLocNode.set(cursor);
          return;
        }

        cursor = cursor.parentNode;
      }

      showLocNode.set();
    },
    inspect: function() {
      if (this.data.nestedView && this.data.domNodeId) {
        selectNodeById(this.data.domNodeId);
      } else if (showLocNode.value && showLocNode.value.data.loc) {
        openFile(showLocNode.value.data.loc);
      }
    }
  }
});

var ValuePart = DOMNode.subclass({
  type: 'static',
  template: templateSwitcher(function(node) {
    return node.type == 'static'
      ? resource('./template/tree/attribute-value-static.tmpl')
      : resource('./template/tree/attribute-value.tmpl');
  }),
  binding: {
    type: 'data:',
    value: 'data:',
    loc: 'data:loc || ""'
  },
  action: {
    openLoc: function() {
      if (this.data.loc) {
        openFile(this.data.loc);
      }
    }
  }
});

var Attribute = DOMNode.subclass({
  template: resource('./template/tree/attritube.tmpl'),
  binding: {
    name: 'data:'
  },
  childClass: ValuePart
});

NodeClassByType.element = DOMNode.subclass({
  template: resource('./template/tree/element.tmpl'),
  binding: {
    showLoc: 'showLoc',
    componentName: 'data:',
    name: 'data:',
    nestedView: 'data:',
    childrenHidden: 'data:',
    inline: 'data:inlineChildren',
    attributes: 'satellite:',
    singleton: function(node) {
      return SINGLETON.indexOf(node.data.name) != -1;
    }
  },
  childFactory: childFactory,
  satellite: {
    attributes: {
      instance: Node.subclass({
        template: resource('./template/tree/attritubes.tmpl'),
        childClass: Attribute
      }),
      config: function(owner) {
        return {
          childNodes: owner.data.attributes.map(function(attr) {
            return {
              data: attr,
              childNodes: wrapData(attr.childNodes)
            };
          })
        };
      }
    }
  }
});

NodeClassByType.text = DOMNode.subclass({
  template: resource('./template/tree/text.tmpl'),
  binding: {
    value: 'data:',
    l10n: 'data:',
    nestedView: 'data:'
  }
});

NodeClassByType.comment = DOMNode.subclass({
  template: resource('./template/tree/comment.tmpl'),
  binding: {
    value: 'data:',
    nestedView: 'data:'
  }
});

module.exports = Node.subclass({
  autoDelegate: true,
  childFactory: childFactory,
  handler: {
    update: function(sender, delta) {
      if ('tree' in delta) {
        this.setChildNodes(this.data.tree);
      }
    }
  }
});
