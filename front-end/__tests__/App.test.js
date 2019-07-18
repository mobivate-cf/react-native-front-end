import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
Enzyme.configure({ adapter: new Adapter() });

describe('Home Page', () => {
  describe('Rendering', () => {
    test('Should follow snapshot', () => {
      const snapshot = renderer.create(<App />).toJSON();
      expect(snapshot).toMatchSnapshot();
    });
    test('Should have no children to render', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree.children).toBeNull();
    });
  });
});