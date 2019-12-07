import React from 'react';
import PropTypes from 'prop-types';

const CurrentStory = ({ title, handleEditClick, synopsis }) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <button onClick={handleEditClick}>Edit</button>
      </div>

      <div>
        <p>{synopsis}</p>
      </div>
    </section>
  );
};

CurrentStory.propTypes = {
  title: PropTypes.string.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  synopsis: PropTypes.func.isRequired
};

export default CurrentStory;