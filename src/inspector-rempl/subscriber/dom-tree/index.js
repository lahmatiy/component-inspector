var wrapData = require('basis.data').wrap;
var Node = require('basis.ui').Node;
var templateSwitcher = require('basis.template').switcher;
var openFile = require('../remote.js').getRemoteMethod('openFile');
var remoteDomTree = require('../remote.js').ns('dom-tree');
var jsSourcePopup = resource('../js-source-popup/index.js');
var SINGLETON = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source'];
var NodeClassByType = {};

function memo(fn, oldValue) {
  return function(newValue) {
    var result = fn(newValue, oldValue);
    oldValue = newValue;
    return result;
  };
}

var hoverNode = new basis.Token();
hoverNode.attach(memo(function(node, oldNode) {
  if (oldNode) {
    oldNode.hovered = false;
    oldNode.updateBind('hovered');
  }

  if (node && node.data.loc) {
    jsSourcePopup().relElement = node.element;
    jsSourcePopup().loc.set(node.data.loc);
  } else {
    jsSourcePopup().loc.set();
  }

  if (node) {
    node.hovered = true;
    node.updateBind('hovered');
    remoteDomTree.callRemote('hover', node.data.domNodeId);
  } else {
    remoteDomTree.callRemote('hover', null);
  }
}));

function childFactory(config) {
  var ChildClass = NodeClassByType[config.type] || this.childClass;

  return new ChildClass({
    data: config,
    childNodes: config.childNodes
  });
}

function findNodeToHover(cursor) {
  while (cursor && cursor instanceof DOMNode) {
    if (cursor.data.type === 'element') { //  || cursor.data.type === 'text'
      return hoverNode.set(cursor);
    }
    cursor = cursor.parentNode;
  }

  hoverNode.set(null);
}

var DOMNode = Node.subclass({
  action: {
    enter: function() {
      findNodeToHover(this);
    },
    leave: function() {
      findNodeToHover(this.parentNode);
    },
    inspect: function() {
      if (this.data.nestedView && this.data.domNodeId) {
        remoteDomTree.callRemote('selectNodeById', this.data.domNodeId);
      } else if (hoverNode.value && hoverNode.value.data.loc) {
        openFile(hoverNode.value.data.loc);
      }
    }
  }
});

var ValuePart = DOMNode.subclass({
  type: 'static',
  template: templateSwitcher(function(node) {
    return node.type == 'static'
      ? resource('./template/attribute-value-static.tmpl')
      : resource('./template/attribute-value.tmpl');
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
  template: resource('./template/attritube.tmpl'),
  binding: {
    name: 'data:'
  },
  childClass: ValuePart
});

NodeClassByType.element = DOMNode.subclass({
  template: resource('./template/element.tmpl'),
  binding: {
    hovered: 'hovered',
    componentName: 'data:',
    name: 'data:',
    nestedView: 'data:',
    foreign: 'data:',
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
        template: resource('./template/attritubes.tmpl'),
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
  template: resource('./template/text.tmpl'),
  binding: {
    hovered: 'hovered',
    value: 'data:',
    l10n: 'data:',
    nestedView: 'data:'
  }
});

NodeClassByType.comment = DOMNode.subclass({
  template: resource('./template/comment.tmpl'),
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
