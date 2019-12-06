import React from 'react';
import PropTypes from 'prop-types';

const AboutCard = ({ developerName, developerImage, developerBio }) => {
  return (
    <div>
      <h2>{developerName}</h2>
      <div>
        <img src={developerImage} alt={developerName} />
        <p>{developerBio}</p>
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  developerName: PropTypes.string.isRequired,
  developerImage: PropTypes.string.isRequired,
  developerBio: PropTypes.string.isRequired
};

export default AboutCard;