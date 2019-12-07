import React from 'react';
import { shallow } from 'enzyme';
import WorldCategory from '../WorldCategory';

describe('WorldCategory component', () => {
  it('renders a world category', () => {
    const wrapper = shallow(<WorldCategory handleAddWorld={() => true} handleViewWorlds={() => true}/>);
    expect(wrapper).toMatchSnapshot(); 
  });
});