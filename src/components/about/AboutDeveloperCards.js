import React from 'react';
import PropTypes from 'prop-types';
import AboutDeveloperCard from './AboutDeveloperCard'; 

const AboutDeveloperCards = ({ aboutDeveloperCards }) => {
  const aboutDeveloperElements = aboutDeveloperCards.map(card => (
    <div key={card.name}>
      <AboutDeveloperCard developerName={card.name} developerImage={card.image} developerBio={card.bio}/>
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
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
  }))
};

export default AboutDeveloperCards;