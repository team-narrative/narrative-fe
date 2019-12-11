import React from 'react';
import PropTypes from 'prop-types';
import AddLocationButton from './AddLocationButton';
import ViewAllButton from './ViewAllButton';

const LocationCategory = ({ handleViewLocations, show, hideModal, showModal }) => {
  return (
    <section>
      <h2>Locations</h2>

      <div>
        <AddLocationButton show={show} hideModal={hideModal} showModal={showModal} />
        <ViewAllButton handleViewClick={handleViewLocations} />
      </div>
    </section>
  );
};

LocationCategory.propTypes = {
  handleViewLocations: PropTypes.func.isRequired,
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default LocationCategory;