import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import NavSideBarContainer from './NavSideBarContainer';
import TestEnvironmentWrapper from '../../test/TestEnvironmentWrapper';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<NavSideBarContainer/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(
      <TestEnvironmentWrapper>
        <NavSideBarContainer />
      </TestEnvironmentWrapper>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
