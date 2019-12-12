import React from 'react';
import { shallow } from 'enzyme';
import ChapterCategory from '../ChapterCategory';

describe('CharacterCategory component', () => {
  it('renders a character category', () => {
    const wrapper = shallow(<ChapterCategory handleAddChapter={() => true} handleViewChapters={() => true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});