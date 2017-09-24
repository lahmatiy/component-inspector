var Node = require('basis.ui').Node;
var Value = require('basis.data').Value;

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
    Value.query(this, 'data.props').link(this, this.setChildNodes);
  }
});

module.exports = InstanceView;
