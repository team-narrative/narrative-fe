import React from 'react';
import PropTypes from 'prop-types';

const AboutDeveloperCard = ({ developerName, developerImage, developerBio }) => {
  return (
    <>
      <h2>{developerName}</h2>
      <div>
        <img src={developerImage} alt={developerName} />
        <p>{developerBio}</p>
      </div>
    </>
  );
};

AboutDeveloperCard.propTypes = {
  developerName: PropTypes.string.isRequired,
  developerImage: PropTypes.string.isRequired,
  developerBio: PropTypes.string.isRequired
};

export default AboutDeveloperCard;