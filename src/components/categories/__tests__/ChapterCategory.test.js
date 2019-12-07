import React from 'react';
import { shallow } from 'enzyme';
import ChapterCategory from '../ChapterCategory';

describe('ChapterCategory component', () => {
  it('renders a chapter category', () => {
    const wrapper = shallow(<ChapterCategory handleAddChapter={() => true} handleViewChapters={() => true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});