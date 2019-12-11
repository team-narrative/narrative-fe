import React from 'react';
import PropTypes from 'prop-types';
import AddLocationButton from './AddLocationButton';
import ViewAllButton from './ViewAllButton';
import styles from './LocationCategory.css';

const LocationCategory = ({ handleViewLocations, show, hideModal, showModal }) => {
  return (
    <section className={styles.LocationCategory}>
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