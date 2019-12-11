import React from 'react';
import PropTypes from 'prop-types';
import EditFormModalWorld from './EditFormModalWorld';

const AddWorldButton = ({ show, hideModal, showModal }) => {
  return (
    <>
      <EditFormModalWorld show={show} hideModal={hideModal}></EditFormModalWorld>
      <button type='button' onClick={showModal}>⊕</button>
    </>
  );
};

AddWorldButton.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default AddWorldButton;
