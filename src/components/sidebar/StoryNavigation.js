import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStoryById } from '../../actions/storyActions';
import { getStoryByStoryId } from '../../services/stories';
import styles from './StoryNavigation.css';

const StoryNavigation = ({ stories, handleSubmit }) => {
  const dispatch = useDispatch();
  const [storySearch, setStorySearch] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    getStoryByStoryId(String(document.querySelector('input:checked').value))
      .then(currentStory => {
        dispatch(fetchStoryById(currentStory._id));
      });
  };

  // eslint-disable-next-line react/prop-types
  const storyElements = stories.map((story) => {
    // if(i === 0) {
    //   return (
    //     <li onClick={handleClick} key={story._id}>
    //       <label htmlFor={story._id}>
    //         <input type='radio' name='story-title' value={story._id} />
    //         {story.storyTitle}
    //       </label>
    //     </li>
    //   );
    // }
    // else {
    return (
      <>
        <label onChange={handleClick} key={story._id} htmlFor={story._id}>
          <input className={styles.StoryTitleButton} id={story._id} type='radio' name='story-title' value={story._id} />
          {story.storyTitle}
        </label>
      </>
    );
    // }
  });

  return (
    <section className={styles.StoryNavigation}>
      <form onSubmit={event => handleSubmit(event, storySearch)}>
        <input name="story-search" type="text" placeholder="Search Stories" value={storySearch} onChange={({ target }) => setStorySearch(target.value)} />

        <div>
          {storyElements}
        </div>

      </form>
    </section>
  );
};

StoryNavigation.propTypes = {
  stories: PropTypes.array,
  handleSubmit: PropTypes.func
};

export default StoryNavigation;