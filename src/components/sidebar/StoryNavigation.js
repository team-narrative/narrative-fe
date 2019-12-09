import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createStory } from '../../actions/storyActions';

const StoryNavigation = ({ stories, handleSubmit }) => {
  
  const [storySearch, setStorySearch] = useState('');
  const dispatch = useDispatch();
  const handleAddStory = (storyTitle, storySynopsis, storyGenre, storyTags) => {
    event.preventDefault();
    dispatch(createStory(storyTitle, storySynopsis, storyGenre, storyTags));
  };

  const storyElements = stories.map(story => (
    <li key={story.title}>
      <h3>{story.title}</h3>
    </li>
  ));

  return (
    <section>
      <form onSubmit={event => handleSubmit(event, storySearch)}>
        <button onClick={handleAddStory} value="button">⊕</button>

        <input name="story-search" type="text" placeholder="Search Stories" value={storySearch} onChange={({ target }) => setStorySearch(target.value)} />

        <ul>
          {storyElements}
        </ul>
      </form>
    </section>
  );
};

StoryNavigation.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  handleSubmit: PropTypes.func.isRequired
};

export default StoryNavigation;