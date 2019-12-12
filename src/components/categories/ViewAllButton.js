import React from 'react';
import PropTypes from 'prop-types';

const ViewAllButton = ({ handleViewClick }) => {
  return (
    <button onClick={handleViewClick}>View All</button>
  );
};

ViewAllButton.propTypes = {
  handleViewClick: PropTypes.func
};

export default ViewAllButton;