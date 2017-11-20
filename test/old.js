import { ready } from '../src/api-adapter/react.js';
import { assert } from 'chai';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../examples/react-todomvc/containers/App.js';
import tmpApi from '../src/inspector-rempl/publisher/api/default.js'; // temporary

describe('react api test', function() {
  before(function() {
    this.domContainer = document.createElement('div');
    document.body.appendChild(this.domContainer);
    render(<App />, this.domContainer);
    return new Promise((resolve) => ready((api) => {
      this.api = {
        ...api,
        getDevInfo: tmpApi.getDevInfo,
        getLocation: tmpApi.getLocation,
        getClassMethodLocation: tmpApi.getClassMethodLocation
      };
      resolve();
    }));
  });

  after(function() {
    unmountComponentAtNode(this.domContainer);
  });

  it('getComponentNameByNode', function() {
    var footer = this.domContainer.querySelector('footer');
    var input = this.domContainer.querySelector('.new-todo');

    assert.equal(this.api.getComponentNameByNode(footer), 'Footer');
    assert.equal(this.api.getComponentNameByNode(input), 'TodoTextInput');
  });

  it('isComponentRootNode', function() {
    var footer = this.domContainer.querySelector('footer');
    var input = this.domContainer.querySelector('.new-todo');
    var checkbox = this.domContainer.querySelector('.todo-list checkbox');
    assert.equal(this.api.isComponentRootNode(footer), true);
    assert.equal(this.api.isComponentRootNode(input), true);
    assert.equal(this.api.isComponentRootNode(checkbox), false);
  });

  it('getInstanceRenderLocation', function() {
    var footer = this.domContainer.querySelector('footer');
    var input = this.domContainer.querySelector('.new-todo');
    var checkbox = this.domContainer.querySelector('.todo-list checkbox');
    assert.equal(this.api.getInstanceRenderLocation(this.api.getInstanceByNode(footer)), '/examples/react-todomvc/components/Footer.js:21:3:35:4');
    assert.equal(this.api.getInstanceRenderLocation(this.api.getInstanceByNode(input)), '/examples/react-todomvc/components/TodoTextInput.js:41:3:55:4');
    assert.equal(this.api.getInstanceRenderLocation(this.api.getInstanceByNode(checkbox)), undefined);
  });

  it('getAdditionalInstanceInfo', function() {
    var node = this.domContainer.querySelector('footer');
    var reactElementByNode = this.api.getInstanceByNode(node);
    var info = this.api.getAdditionalInstanceInfo(reactElementByNode);

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
    assert.equal(this.api.getInstanceRootNode(this.api.getInstanceByNode(footer)), footer);
  });
});
