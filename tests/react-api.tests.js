import {assert} from 'chai';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './../examples/react-todomvc/containers/App';

console.log('React version', React.version);
describe('react api test', function() {
  before(function() {
    this.domContainer = document.createElement('div');
    document.body.appendChild(this.domContainer);
    render(<App />, this.domContainer);
  });

  var api = window.reactInspectorApi;

  it('getComponentNameByNode', function() {
    var footer = this.domContainer.querySelector('footer');
    var input = this.domContainer.querySelector('.new-todo');

    assert.equal(api.getComponentNameByNode(footer), 'Footer');
    assert.equal(api.getComponentNameByNode(input), 'TodoTextInput');
  });

  it('isComponentRootNode', function() {
    var footer = this.domContainer.querySelector('footer');
    var input = this.domContainer.querySelector('.new-todo');
    var checkbox = this.domContainer.querySelector('.todo-list checkbox');
    assert.equal(api.isComponentRootNode(footer), true);
    assert.equal(api.isComponentRootNode(input), true);
    assert.equal(api.isComponentRootNode(checkbox), false);
  });

  it('getInstanceRenderLocation', function() {
    var footer = this.domContainer.querySelector('footer');
    var input = this.domContainer.querySelector('.new-todo');
    var checkbox = this.domContainer.querySelector('.todo-list checkbox');
    assert.equal(api.getInstanceRenderLocation(api.getInstanceByNode(footer)), '/examples/react-todomvc/components/Footer.js:21:3:35:4');
    assert.equal(api.getInstanceRenderLocation(api.getInstanceByNode(input)), '/examples/react-todomvc/components/TodoTextInput.js:41:3:55:4');
    assert.equal(api.getInstanceRenderLocation(api.getInstanceByNode(checkbox)), undefined);
  });

  it('getAdditionalInstanceInfo', function() {
    var node = this.domContainer.querySelector('footer');
    var reactElementByNode = api.getInstanceByNode(node);
    var info = reactInspectorApi.getAdditionalInstanceInfo(reactElementByNode);

    assert.equal(info[0].name, 'Footer');
    assert.include(info[0].loc, '/examples/react-todomvc/components/MainSection.js:77:9:81:46');
    assert.equal(info[0].props[0].key, 'markedCount');
    assert.equal(info[0].props[0].type, 'other');
    assert.equal(info[0].props[0].valueText, '0');
    assert.equal(info[0].props[0].valueLoc, undefined);
    assert.equal(info[0].props[2].key, 'filter');
    assert.equal(info[0].props[2].type, 'string');
    assert.equal(info[0].props[2].valueText, 'show_all');
    assert.equal(info[0].props[2].valueLoc, undefined);
    assert.equal(info[1].className, 'Footer');
    assert.equal(info[1].isClass, true);
  });

  it('getInstanceRootNode', function() {
    var footer = this.domContainer.querySelector('footer');
    assert.equal(api.getInstanceRootNode(api.getInstanceByNode(footer)), footer);
  });

  after(function() {
    unmountComponentAtNode(this.domContainer);
  });
});
