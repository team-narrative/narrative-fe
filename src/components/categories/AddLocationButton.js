import React from 'react';
import PropTypes from 'prop-types';
import EditFormModalLocation from './EditFormModalLocation';

const AddLocationButton = ({ show, hideModal, showModal }) => {
  return (
    <>
      <EditFormModalLocation show={show} hideModal={hideModal}></EditFormModalLocation>
      <button type='button' onClick={showModal}>⊕</button>
    </>
  );
};

AddLocationButton.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default AddLocationButton;
