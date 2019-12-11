import React from 'react';
import PropTypes from 'prop-types';
import AddWorldButton from './AddWorldButton';
import ViewAllButton from './ViewAllButton';

const WorldCategory = ({ handleViewWorlds, show, hideModal, showModal }) => {
  return (
    <section>
      <h2>World Building</h2>

      <div>
        <AddWorldButton show={show} hideModal={hideModal} showModal={showModal} />
        <ViewAllButton handleViewClick={handleViewWorlds} />
      </div>
    </section>
  );
};

WorldCategory.propTypes = {
  handleViewWorlds: PropTypes.func.isRequired,
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default WorldCategory;