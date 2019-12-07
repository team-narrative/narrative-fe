import React from 'react';
import { shallow } from 'enzyme';
import ViewAllButton from '../ViewAllButton';

describe('ViewAllButton component', () => {
  it('renders view all button', () => {
    const wrapper = shallow(<ViewAllButton />);
    expect(wrapper).toMatchSnapshot();
  });
});