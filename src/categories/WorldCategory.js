import React from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import ViewAllButton from './ViewAllButton';

const WorldCategory = ({ handleAddWorld, handleViewWorlds }) => {
  return (
    <section>
      <h2>World Building</h2>

      <div>
        <AddButton handleAddClick={handleAddWorld} />
        <ViewAllButton handleViewClick={handleViewWorlds} />
      </div>
    </section>
  );
};

WorldCategory.propTypes = {
  handleAddWorld: PropTypes.func.isRequired,
  handleViewWorlds: PropTypes.func.isRequired
};

export default WorldCategory;