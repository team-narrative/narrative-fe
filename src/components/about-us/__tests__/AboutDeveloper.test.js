import React from 'react';
import { shallow } from 'enzyme';
import AboutDeveloperCard from '../AboutDeveloperCard';

describe('AboutDeveloperCard component', () => {
  it('renders an about developer card', () => {
    const wrapper = shallow(<AboutDeveloperCard developerName="developer" developerImage="developer.jpg" developerBio="I am a developer"/>);
    expect(wrapper).toMatchSnapshot();
  });
});