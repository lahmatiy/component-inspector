import { ready } from '../../src/api-adapter/react.js';
import { unmountComponentAtNode } from 'react-dom';

export default function initTestSuite() {
  beforeEach(function() {
    this.domContainer = document.createElement('div');
    document.body.appendChild(this.domContainer);
    return new Promise((resolve) => ready((api) => {
      this.api = api;
      resolve();
    }));
  });

  afterEach(function() {
    unmountComponentAtNode(this.domContainer);
  });
}
