import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddLocationButton from './AddLocationButton';
import ViewAllButton from './ViewAllButton';
import styles from './LocationCategory.css';

const LocationCategory = ({ show, hideModal, showModal }) => {
  const [redirect, setRedirect] = useState(false);

  if(redirect) return <Redirect to="/locations" />;
  const handleViewLocations = () => {
    setRedirect(true);
  };

  return (
    <section className={styles.LocationCategory}>
      <h2 className={styles.h2}>Locations</h2>
      <div className={styles.LocationCategoryContainer}>
        <AddLocationButton show={show} hideModal={hideModal} showModal={showModal} />
        <ViewAllButton handleViewClick={handleViewLocations} />
      </div>
    </section>
  );
};

LocationCategory.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default LocationCategory;