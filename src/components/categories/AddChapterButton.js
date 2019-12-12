import React from 'react';
import PropTypes from 'prop-types';
import EditFormModalChapter from './EditFormModalChapter';
import styles from './AddChapterButton.css';

const AddChapterButton = ({ show, hideModal, showModal }) => {
  return (
    <div className={styles.AddChapterButton}>
      <EditFormModalChapter show={show} hideModal={hideModal}></EditFormModalChapter>
      <button type='button' onClick={showModal}>⊕</button>
    </div>
  );
};

AddChapterButton.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default AddChapterButton;
