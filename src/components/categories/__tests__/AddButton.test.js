import React from 'react';
import { shallow } from 'enzyme';
import AddButton from '../AddButton';

describe('AddButton component', () => {
  it('renders an add button', () => {
    const wrapper = shallow(<AddButton handleAddClick={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});