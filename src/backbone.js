require('./backbone/index.js');

if (typeof Backbone != 'undefined')
{
  // patch backbone.js to have references to view
  var _setElement = Backbone.View.prototype._setElement;
  Backbone.View.prototype._setElement = function () {
    _setElement.apply(this, arguments);
    this.el.__view = this;
  };
}
else
{
  console.warn('Backbone doesn\'t found. Include component-inspector script right after backbone.js');
}
