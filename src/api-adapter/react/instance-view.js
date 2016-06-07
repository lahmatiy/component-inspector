var Node = require('basis.ui').Node;

var InstanceView = Node.subclass({
  template: resource('./instance-view.tmpl'),
  binding: {
    name: 'name',
    loc: 'loc'
  }
});

module.exports = InstanceView;
