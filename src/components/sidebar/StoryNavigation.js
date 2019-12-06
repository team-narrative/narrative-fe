import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StoryNavigation = ({ handleAddStory, stories, handleSubmit }) => {
  const [storySearch, setStorySearch] = useState('');

  const storyElements = stories.map(story => (
    <li key={story.title}>
      <h3>{story.title}</h3>
    </li>
  ));

  return (
    <section>
      <form onSubmit={event => handleSubmit(event, storySearch)}>
        <button onClick={handleAddStory}>⊕</button>

        <input name="story-search" type="text" placeholder="Search Stories" value={storySearch} onChange={({ target }) => setStorySearch(target.value)} />

        <ul>
          {storyElements}
        </ul>
      </form>
    </section>
  );
};

StoryNavigation.propTypes = {
  handleAddStory: PropTypes.func.isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  handleSubmit: PropTypes.func.isRequired
};

export default StoryNavigation;