import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStoryById } from '../../actions/storyActions';
import { getStoryByStoryId } from '../../services/stories';
// import { createStory } from '../../actions/storyActions';

const StoryNavigation = ({ stories, handleSubmit }) => {
  const dispatch = useDispatch();
  const [storySearch, setStorySearch] = useState('');

  // const handleAddStory = (storyTitle, storySynopsis, storyGenre, storyTags) => {
  //   event.preventDefault();
  //   dispatch(createStory(storyTitle, storySynopsis, storyGenre, storyTags));
  // };

  const handleClick = (event) => {
    event.preventDefault();
    getStoryByStoryId(String(document.querySelector('input:checked').value))
      .then(currentStory => {
        dispatch(fetchStoryById(currentStory._id));
      });
  };

  // eslint-disable-next-line react/prop-types
  const storyElements = stories.map(story => {

    return (
      <li onClick={handleClick} key={story._id}>
        <label htmlFor={story._id}>
          <input type='radio' name='story-title' value={story._id} />
          {story.storyTitle}
        </label>
      </li>
    );
  });

  return (
    <section>
      <form onSubmit={event => handleSubmit(event, storySearch)}>
        {/* <button onClick={handleAddStory} value="button">⊕</button> */}
        <input name="story-search" type="text" placeholder="Search Stories" value={storySearch} onChange={({ target }) => setStorySearch(target.value)} />

        <ul>
          {storyElements}
        </ul>
      </form>
    </section>
  );
};

StoryNavigation.propTypes = {
  stories: PropTypes.array,
  handleSubmit: PropTypes.func
};

export default StoryNavigation;