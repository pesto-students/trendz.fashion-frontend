import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import OutlineButton from './OutlineButton';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<OutlineButton/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(<OutlineButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
