var Node = require('basis.ui').Node;

var InstanceView = Node.subclass({
  template: resource('./instance-view.tmpl'),
  binding: {
    name: 'name',
    loc: 'loc'
  },
  childClass: {
    template: resource('./prop-view.tmpl'),
    binding: {
      key: 'key',
      type: 'type',
      valueText: 'valueText',
      valueLoc: 'valueLoc'
    }
  }
});

module.exports = InstanceView;
