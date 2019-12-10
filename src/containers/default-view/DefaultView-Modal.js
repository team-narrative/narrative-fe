import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createStory } from '../../actions/storyActions';
import styles from './DefaultView-Modal.css';

const DefaultViewModal = ({ hideModal, show }) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createStory(title, synopsis));
    setTitle('');
    setSynopsis('');
  };

  return (
    <div>
      <p>Start A New Story</p>

      <div className={show ? styles.displayBlock : styles.displayNone}>
        <section className={styles.modalMain}>
          <form onSubmit={handleSubmit}>
            <p>Story Title ::</p><input placeholder="title" type="text" value={title} onChange={({ target }) => setTitle(target.value)}></input>
            <p>Story Synopsis ::</p> <input placeholder="synopsis" type="text" value={synopsis} onChange={({ target }) => setSynopsis(target.value)}></input>
            <button value='button' onClick={hideModal}>Save new story</button>
          </form>
          <button onClick={hideModal}>✗</button>
        </section>
      </div>
    </div>
  );
};

DefaultViewModal.propTypes = {
  hideModal: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.string
};

export default DefaultViewModal;

