import React from 'react';
import { shallow } from 'enzyme';
import UserCard from '../UserCard';

describe('AboutDeveloperCard component', () => {
  it('renders an about developer card', () => {
    const wrapper = shallow(<UserCard name="user" picture="user.jpg" handleLogout={() => true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});