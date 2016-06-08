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

    assert.equal(api.getComponentNameByNode(footer), '<Footer>');
    assert.equal(api.getComponentNameByNode(input), '<TodoTextInput>');
  });

  it('isComponentRootNode', function() {
    var footer = this.domContainer.querySelector('footer');
    var input = this.domContainer.querySelector('.new-todo');
    var checkbox = this.domContainer.querySelector('.todo-list checkbox');
    assert.equal(api.isComponentRootNode(footer), true);
    assert.equal(api.isComponentRootNode(input), true);
    assert.equal(api.isComponentRootNode(checkbox), false);
  });

  it('getAdditionalInstanceInfo', function() {
    var node = this.domContainer.querySelector('footer');
    var reactElementByNode = api.getInstanceByNode(node);
    var info = reactInspectorApi.getAdditionalInstanceInfo(reactElementByNode);

    assert.equal(info[0].childNodes[0].name, '<Footer>');
    assert.include(info[0].childNodes[0].loc, '/examples/react-todomvc/components/MainSection.js:76:9:80:46');
    assert.equal(info[1].childNodes[0].cls.name, 'Footer');
    assert.equal(info[1].childNodes[0].isClass, false);
  });

  it('getInstanceRootNode', function() {
    var footer = this.domContainer.querySelector('footer');
    assert.equal(api.getInstanceRootNode(api.getInstanceByNode(footer)), footer);
  });

  after(function() {
    unmountComponentAtNode(this.domContainer);
  });
});
