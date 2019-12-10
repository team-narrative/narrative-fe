import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { createStory } from '../../actions/storyActions';

const StoryNavigation = ({ stories, handleSubmit }) => {
  console.log('Story Nav', stories[0]);
  // const dispatch = useDispatch();
  const [storySearch, setStorySearch] = useState('');

  // const handleAddStory = (storyTitle, storySynopsis, storyGenre, storyTags) => {
  //   event.preventDefault();
  //   dispatch(createStory(storyTitle, storySynopsis, storyGenre, storyTags));
  // };

  // eslint-disable-next-line react/prop-types
  const storyElements = stories.map((story, i) => {

    return (
      <li key={i}>
        <h3>{story.storyTitle}</h3>
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