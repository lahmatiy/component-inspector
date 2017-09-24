var Node = require('basis.ui').Node;

var InstanceView = Node.subclass({
  autoDelegate: true,
  template: resource('./instance-view.tmpl'),
  binding: {
    name: 'data:',
    loc: 'data:'
  },
  childClass: {
    template: resource('./instance-prop.tmpl'),
    binding: {
      key: 'key',
      type: 'type',
      valueText: 'valueText',
      valueLoc: 'valueLoc'
    }
  },
  init: function() {
    Node.prototype.init.call(this);
    this.setChildNodes(this.data.props);
  },
  emit_update: function() {
    Node.prototype.emit_update.apply(this, arguments);
    this.setChildNodes(this.data.props);
  }
});

module.exports = InstanceView;
