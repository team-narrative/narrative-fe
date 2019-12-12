import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddWorldButton from './AddWorldButton';
import ViewAllButton from './ViewAllButton';
import styles from './WorldCategory.css';

const WorldCategory = ({ show, hideModal, showModal }) => {
  const [redirect, setRedirect] = useState(false);

  if(redirect) return <Redirect to="/worlds" />;
  const handleViewWorlds = () => {
    setRedirect(true);
  };
  return (
    <section className={styles.WorldCategory}>
      <h2 className={styles.h2}>World Building</h2>


      <div className={styles.WorldCategoryContainer}>
        <AddWorldButton show={show} hideModal={hideModal} showModal={showModal} />
        <ViewAllButton handleViewClick={handleViewWorlds} />
      </div>
    </section>
  );
};

WorldCategory.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default WorldCategory;