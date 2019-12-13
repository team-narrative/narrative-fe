import React from 'react';
import PropTypes from 'prop-types';
import EditFormModalChapter from './EditFormModalChapter';

const AddChapterButton = ({ show, hideModal, showModal }) => {
  return (
    <>
      <EditFormModalChapter show={show} hideModal={hideModal}></EditFormModalChapter>
      <button type='button' onClick={showModal}>⊕</button>
    </>
  );
};

AddChapterButton.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default AddChapterButton;
