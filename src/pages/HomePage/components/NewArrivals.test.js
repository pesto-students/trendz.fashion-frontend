import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import NewArrivals from './NewArrivals';
import TestEnvironmentWrapper from '../../../test/TestEnvironmentWrapper';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<NewArrivals/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(
      <TestEnvironmentWrapper>
        <NewArrivals />
      </TestEnvironmentWrapper>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
