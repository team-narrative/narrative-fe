import React from 'react';
import PropTypes from 'prop-types';
import EditFormModalCharacter from './EditFormModalCharacter';

const AddCharacterButton = ({ show, hideModal, showModal }) => {
  return (
    <>
      <EditFormModalCharacter show={show} hideModal={hideModal}></EditFormModalCharacter>
      <button type='button' onClick={showModal}>⊕</button>
    </>
  );
};

AddCharacterButton.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default AddCharacterButton;
