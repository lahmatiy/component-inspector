import {expect} from 'chai';
import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import apiAdapter from './../src/api-adapter/react/react-api-adapter';
import App from './../examples/react-todomvc/containers/App'

describe('react api test', function () {
  before(function () {
    this.domContainer = document.createElement('div');
    document.body.appendChild(this.domContainer);
    render(<App />, this.domContainer);
  });


  var reactInspectorApi = window.reactInspectorApi;


  it('getComponentNameByNode', function () {
    var footer = this.domContainer.querySelector('footer');
    var input = this.domContainer.querySelector('.new-todo');
    var Footer = reactInspectorApi.getComponentNameByNode(footer);
    var Input = reactInspectorApi.getComponentNameByNode(input);
    expect(Footer).to.be.equal('<Footer>');
    expect(Input).to.be.equal('<TodoTextInput>');

  });

  it('isComponentRootNode', function () {
    var footer = this.domContainer.querySelector('footer');
    expect(reactInspectorApi.isComponentRootNode(footer)).to.be.equal(true);
    var input = this.domContainer.querySelector('.new-todo');
    expect(reactInspectorApi.isComponentRootNode(input)).to.be.equal(true);
  });

  it('getAdditionalInstanceInfo', function () {
    var node = this.domContainer.querySelector('footer');
    var reactElementByNode = reactInspectorApi.getInstanceByNode(node);
    reactInspectorApi
      .getAdditionalInstanceInfo(reactElementByNode);

    expect(instanceViewConfig.name).to.be.equal('<Footer>');
    expect(instanceViewConfig.loc).to.be.contains('/examples/react-todomvc/components/MainSection.js:76:9:80:46');
    expect(classViewConfig.cls.name).to.be.equal('Footer');
    expect(classViewConfig.isClass).to.be.equal(false);
  });

  after(function () {
    unmountComponentAtNode(this.domContainer);
  });
});
