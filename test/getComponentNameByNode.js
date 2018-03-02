import initTestSuite from './helpers/init-test-suite.js';
import { assert } from 'chai';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

describe('getComponentNameByNode', function() {
  initTestSuite();

  it('a class', function() {
    class Foo extends React.Component {
      render() {
        return <div id='target'>Foo</div>;
      }
    }

    render(<Foo />, this.domContainer);

    const element = document.getElementById('target');
    assert.equal(this.api.getComponentNameByNode(element), 'Foo');
  });

  it('a class with a Element as a root', function() {
    class Bar extends React.Component {
      render() {
        return <div id='target'>Bar</div>;
      }
    }

    class Foo extends React.Component {
      render() {
        return <Bar />;
      }
    }

    render(<Foo />, this.domContainer);

    const element = document.getElementById('target');
    assert.equal(this.api.getComponentNameByNode(element), 'Foo');
  });

  it('an anonymous class', function() {
    const Foo = class extends React.Component {
      render() {
        return <div id='target' />;
      }
    };

    render(<Foo />, this.domContainer);

    const element = document.getElementById('target');
    assert.equal(this.api.getComponentNameByNode(element), 'Foo');
  });

  it('a HOC as a function', function() {
    function Foo() {
      return <div id='target' />;
    }

    render(<Foo />, this.domContainer);

    const element = document.getElementById('target');
    assert.equal(this.api.getComponentNameByNode(element), 'Foo');
  });

  it('a HOC as an anonymous function', function() {
    const Foo = function() {
      return <div id='target' />;
    };

    render(<Foo />, this.domContainer);

    const element = document.getElementById('target');
    assert.equal(this.api.getComponentNameByNode(element), 'StatelessComponent');
  });

  it('a HOC as an arrow function', function() {
    const Foo = () => <div id='target' />;

    render(<Foo />, this.domContainer);

    const element = document.getElementById('target');
    assert.equal(this.api.getComponentNameByNode(element), 'StatelessComponent');
  });
});
