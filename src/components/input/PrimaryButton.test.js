import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import PrimaryButton from './PrimaryButton';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<PrimaryButton/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(<PrimaryButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
