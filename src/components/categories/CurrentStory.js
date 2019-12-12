import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultViewModalEdit from '../../containers/default-view/DefaultView-Modal-Edit';
import styles from './CurrentStory.css';

const CurrentStory = ({ title, synopsis }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <section className={styles.CurrentStory}>
      <div className={styles.CurrentStoryContainer}>
        <h3>Current Story:</h3>
        <h2>{title}</h2>
        <DefaultViewModalEdit show={show} hideModal={hideModal} />
        <button className={styles.CurrentStoryButton} type='button' onClick={showModal}>Edit Story</button>
      </div>

      <div className={styles.SynopsisContainer}>
        <p>{synopsis}</p>
      </div>
    </section>
  );
};

CurrentStory.propTypes = {
  title: PropTypes.string,
  synopsis: PropTypes.string
};

export default CurrentStory;