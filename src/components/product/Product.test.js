import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import Product from './Product';
import TestEnvironmentWrapper from '../../test/TestEnvironmentWrapper';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<Product/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(
      <TestEnvironmentWrapper>
        <Product product={{ id: 5 }} />
      </TestEnvironmentWrapper>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
