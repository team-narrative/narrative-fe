import React from 'react';
import { Link } from 'react-router-dom';
import AboutDeveloperCard from '../components/about-us/AboutDeveloperCard';
import styles from './AboutUs.css';

const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <header>
        <Link to={'/stories'}>Back</Link>
      </header>

      <div className={styles.AboutUsContainer}>
        <AboutDeveloperCard developerName="dev 1" developerImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0533%2F2089%2Ffiles%2Fplaceholder-images-image_large.png%3Fv%3D1530129081&f=1&nofb=1" developerBio="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
        <AboutDeveloperCard developerName="dev 1" developerImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0533%2F2089%2Ffiles%2Fplaceholder-images-image_large.png%3Fv%3D1530129081&f=1&nofb=1" developerBio="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
      </div>

      <div className={styles.AboutUsContainer}>
        <AboutDeveloperCard developerName="dev 1" developerImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0533%2F2089%2Ffiles%2Fplaceholder-images-image_large.png%3Fv%3D1530129081&f=1&nofb=1" developerBio="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
        <AboutDeveloperCard developerName="dev 1" developerImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0533%2F2089%2Ffiles%2Fplaceholder-images-image_large.png%3Fv%3D1530129081&f=1&nofb=1" developerBio="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
      </div>

      <footer>
        <p>&copy; Narrative 2019</p>
      </footer>
    </section>
  );
};

export default AboutUs;
