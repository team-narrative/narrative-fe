import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DefaultView-Modal.css';
import { createStory } from '../actions/storyActions';

const DefaultViewModal = ({ handleClose, show }) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createStory(title, synopsis));
  };

  return (
    <div>
      <p>Start A New Story</p>

      <div className={show ? styles.displayBlock : styles.displayNone}>
        <section className={styles.modalMain}>
          <form onSubmit={handleSubmit}>
            <input placeholder="title" type="text" value={title} onChange={({ target }) => setTitle(target.value)}></input>
            <input placeholder="synopsis" type="text" value={synopsis} onChange={({ target }) => setSynopsis(target.value)}></input>
            <button>Save new story</button>
            <button value='button' onClick={handleClose}>Close</button>
          </form>
        </section>
      </div>
    </div>
  );
};

DefaultViewModal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.func,
  children: PropTypes.string
};

export default DefaultViewModal;

