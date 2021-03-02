import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import Dropdown from './Dropdown';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<Dropdown/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(<Dropdown />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
