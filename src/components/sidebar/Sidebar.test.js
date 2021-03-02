import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import Sidebar from './Sidebar';
import TestEnvironmentWrapper from '../../test/TestEnvironmentWrapper';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<Sidebar/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(
      <TestEnvironmentWrapper>
        <Sidebar />
      </TestEnvironmentWrapper>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
