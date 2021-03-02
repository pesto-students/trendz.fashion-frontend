import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import Loader from './Loader';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<Loader/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(<Loader />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
