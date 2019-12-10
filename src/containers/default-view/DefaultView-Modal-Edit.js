import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentStoryId } from '../../selectors/storySelectors';
import styles from './DefaultView-Modal.css';
import { putStoryByStoryId } from '../../services/stories';
import { updateStoryById } from '../../actions/storyActions';

const DefaultViewModalEdit = ({ handleClose, show }) => {

  const dispatch = useDispatch();
  const storyId = useSelector(state => getCurrentStoryId(state));
  console.log(storyId);
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    putStoryByStoryId(storyId, title, synopsis)
      .then(updatedStory => {
        console.log(updatedStory);
        dispatch(updateStoryById(storyId, updatedStory.storyTitle, updatedStory.storySynopsis));
      });
  };

  return (
    <div>
      <p>Current Story</p>

      <div className={show ? styles.displayBlock : styles.displayNone}>
        <section className={styles.modalMain}>
          <form onSubmit={handleSubmit}>
            <p>Story Title ::</p><input placeholder="title" type="text" value={title} onChange={({ target }) => setTitle(target.value)}></input>
            <p>Story Synopsis ::</p> <input placeholder="synopsis" type="text" value={synopsis} onChange={({ target }) => setSynopsis(target.value)}></input>
            <button value='button' onClick={handleClose}>Save changes</button>
          </form>
          <button onClick={handleClose}>✗</button>
        </section>
      </div>
    </div>
  );
};

DefaultViewModalEdit.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.func,
  children: PropTypes.string
};

export default DefaultViewModalEdit;

