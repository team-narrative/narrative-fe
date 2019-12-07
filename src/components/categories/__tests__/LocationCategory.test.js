import React from 'react';
import { shallow } from 'enzyme';
import LocationCategory from '../LocationCategory';

describe('LocationCategory component', () => {
  it('renders a location category', () => {
    const wrapper = shallow(<LocationCategory handleAddLocation={() => true} handleViewLocations={() => true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});