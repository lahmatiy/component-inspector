var Node = require('basis.ui').Node;

function getClassName(cls) {
  return cls.displayName || cls.name;
}

module.exports = Node.subclass({
  cls: null,
  template: resource('./class-view.tmpl'),
  binding: {
    isClass: 'isClass',
    className: function(node) {
      return getClassName(node.cls) || '<Unknown>';
    },
    classLoc: function(node) {
      return node.getLocation(node.cls);
    },
    renderLoc: function(node) {
      return node.getLocation(node.cls && node.cls.prototype.render);
    },
    extendsClassName: function(node) {
      if (Object.getPrototypeOf) {
        return getClassName(Object.getPrototypeOf(node.cls)) || 'React.Component';
      }
      return 'unknown';
    },
    extendsLoc: function(node) {
      if (Object.getPrototypeOf) {
        return node.getLocation(Object.getPrototypeOf(node.cls));
      }
    }
  },
  childClass: {
    template: resource('./class-decorator.tmpl'),
    binding: {
      name: 'name',
      loc: 'loc',
      fnLoc: 'fnLoc',
      classLoc: 'classLoc',
      renderLoc: 'renderLoc'
    }
  }
});
