import React from 'react';
import PropTypes from 'prop-types';
import EditFormModalWorld from './EditFormModalWorld';
import styles from './AddWorldButton.css';

const AddWorldButton = ({ show, hideModal, showModal }) => {
  return (
    <div className={styles.AddWorldButton}>
      <EditFormModalWorld show={show} hideModal={hideModal}></EditFormModalWorld>
      <button type='button' onClick={showModal}>⊕</button>
    </div>
  );
};

AddWorldButton.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default AddWorldButton;
