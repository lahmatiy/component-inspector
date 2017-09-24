var Node = require('basis.ui').Node;

module.exports = Node.subclass({
  autoDelegate: true,
  template: resource('./class-view.tmpl'),
  binding: {
    isClass: 'data:',
    className: 'data:',
    classLoc: 'data:',
    renderLoc: 'data:',
    extendsClassName: 'data:',
    extendsLoc: 'data:'
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
  },
  init: function() {
    Node.prototype.init.call(this);
    this.setChildNodes(this.data.decorators);
  }
});
