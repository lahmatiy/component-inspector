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
    var node = this.domContainer.querySelector('footer');
    var footer = reactInspectorApi.getComponentNameByNode(node);
    expect(footer).to.be.equal('<Footer>');

  });

  it('isComponentRootNode', function () {
    var node = this.domContainer.querySelector('footer');
    expect(reactInspectorApi.isComponentRootNode(node)).to.be.equal(true);
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
