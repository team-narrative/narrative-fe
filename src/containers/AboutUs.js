import React from 'react';
import { Link } from 'react-router-dom';
import AboutDeveloperCards from '../components/about-us/AboutDeveloperCards';

const AboutUs = () => {
  const placeholderCards = [
    {
      developerName: 'dev 1',
      developerImage: 'dev.jpg',
      developerBio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores.'
    },
    {
      developerName: 'dev 2',
      developerImage: 'dev.jpg',
      developerBio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores.'
    },
    {
      developerName: 'dev 3',
      developerImage: 'dev.jpg',
      developerBio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores.'
    },
    {
      developerName: 'dev 4',
      developerImage: 'dev.jpg',
      developerBio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores.'
    }
  ];

  return (
    <section>
      <header>
        <Link to={'/stories'}>Back</Link>
      </header>

      <AboutDeveloperCards aboutDeveloperCards={placeholderCards}/>

      <footer>
        <p>&copy; Narrative 2019</p>
      </footer>
    </section>
  );
};

export default AboutUs;
