import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ handleAddClick }) => {
  return (
    <button onClick={handleAddClick}>⊕</button>
  );
};

AddButton.propTypes = {
  handleAddClick: PropTypes.func.isRequired
};

export default AddButton;
