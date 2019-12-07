import React from 'react';
import { shallow } from 'enzyme';
import CurrentStory from '../CurrentStory';

describe('CurrentStory component', () => {
  it('renders a current story', () => {
    const wrapper = shallow(<CurrentStory title="current story" handleEditClick={() => true} synopsis="this is the current story" />);
    expect(wrapper).toMatchSnapshot();
  });
});