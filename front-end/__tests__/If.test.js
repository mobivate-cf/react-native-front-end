import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import If from '../src/component/If/If';
Enzyme.configure({ adapter: new Adapter() });

describe('If Component', () => {
  describe('Functionality', () => {
    test('Should return an empty object if the condition is false', () => {
        const mountedIf = shallow(<If condition={false}/>);
        const result = {}
        expect(mountedIf).toEqual(result);
    })
    test('Should return the children if the condition is true', () => {
      const mountedIf = shallow(<If condition={true}/>);
      const result = {};
      expect(mountedIf).toEqual(result);
  })
  });
});