import React from 'react';
import PropTypes from 'prop-types';
import AboutDeveloperCard from './AboutDeveloperCard'; 

const AboutDeveloperCards = ({ aboutDeveloperCards }) => {
  const aboutDeveloperElements = aboutDeveloperCards.map(card => (
    <div key={card.developerName}>
      <AboutDeveloperCard developerName={card.developerName} developerImage={card.developerImage} developerBio={card.developerBio}/>
    </div>
  ));

  return (
    <section>
      {aboutDeveloperElements}
    </section>
  );
};

AboutDeveloperCards.propTypes = {
  aboutDeveloperCards: PropTypes.arrayOf(PropTypes.shape({
    developerName: PropTypes.string.isRequired,
    developerImage: PropTypes.string.isRequired,
    developerBio: PropTypes.string.isRequired
  })).isRequired
};

export default AboutDeveloperCards;