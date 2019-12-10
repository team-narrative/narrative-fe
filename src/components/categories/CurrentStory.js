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
      <div>
        <h2>{title}lorem</h2>
        <DefaultViewModalEdit show={show} handleClose={hideModal} />
        <button type='button' onClick={showModal}>Edit Story</button>
      </div>

      <div>
        <p>{synopsis}lorem</p>
      </div>
    </section>
  );
};

CurrentStory.propTypes = {
  title: PropTypes.string,
  synopsis: PropTypes.string
};

export default CurrentStory;