import assert from 'assert';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import apiAdapter from './../src/api-adapter/react/react-api-adapter';
import App from './../examples/react-todomvc/containers/App'

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

    assert.equal(api.isComponentRootNode(footer), true);
    assert.equal(api.isComponentRootNode(input), true);
  });

  it('getAdditionalInstanceInfo', function() {
    var node = this.domContainer.querySelector('footer');
    var reactElementByNode = api.getInstanceByNode(node);

    reactInspectorApi.getAdditionalInstanceInfo(reactElementByNode);

    assert.equal(instanceViewConfig.name, '<Footer>');
    assert.equal(instanceViewConfig.loc, '/examples/react-todomvc/components/MainSection.js:76:9:80:46');
    assert.equal(classViewConfig.cls.name, 'Footer');
    assert.equal(classViewConfig.isClass, false);
  });

  after(function() {
    unmountComponentAtNode(this.domContainer);
  });
});
