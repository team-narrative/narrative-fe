import React from 'react';
import { shallow } from 'enzyme';
import AboutDeveloperCards from '../AboutDeveloperCard';

describe('AboutDeveloperCards component', () => {
  it('renders a list of about developer cards', () => {
    const developers = [
      {
        developerName: 'developer 1',
        developerImage: 'developer1.jpg',
        developerBio: 'bio 1'
      },
      {
        developerName: 'developer 2',
        developerImage: 'developer2.jpg',
        developerBio: 'bio 2'
      },
      {
        developerName: 'developer 3',
        developerImage: 'developer3.jpg',
        developerBio: 'bio 3'
      }
    ];

    const wrapper = shallow(<AboutDeveloperCards AboutDeveloperCards={developers}/>);
    expect(wrapper).toMatchSnapshot();
  });
});