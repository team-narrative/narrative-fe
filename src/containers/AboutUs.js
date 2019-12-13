import React from 'react';
import AboutDeveloperCard from '../components/about-us/AboutDeveloperCard';
import styles from './AboutUs.css';
import Header from '../components/header/Header';

const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <Header />
      
      <div className={styles.AboutUsContainer}>
        <AboutDeveloperCard developerName="Donna Lambert" developerImage="src/assets/donna.jpg" developerBio="Donna is a constantly curious full-stack JavaScript developer. She is passionate about technology and problem-solving, and is always seeking new ways to learn and improve."/>
        <AboutDeveloperCard developerName="Antonella Gutierrez" developerImage="src/assets/antonella-pic.jpg" developerBio="Software engineer possessing an expertise in building websites and applications using JavaScript and the MERN(MongoDB, Express.js, React and Node.js) Stack. Enjoys learning and implementing new technologies and languages." />
      </div>

      <div className={styles.AboutUsContainer}>
        <AboutDeveloperCard developerName="Ollie Hill" developerImage="src/assets/ollie-portrait.png" developerBio="Ollie is a software developer who’s passionate about the ways in which technology and storytelling can combine to create compelling narratives."/>
        <AboutDeveloperCard developerName="Alex Spencer" developerImage="src/assets/alex-pic.png" developerBio="Full Stack Software Developer who made a recent pivot from a career in institutional investment consulting and asset management. Organized, detail-oriented, and passionate about technology, with strong interpersonal and crossfunctional communication skills. I love challenging myself to learn new things, problem solve, and innovate. Avid Portland Timbers (RCTID) and Arsenal FC (COYG) supporter." />
      </div>

      <footer>
        <p>&copy; Narrative 2019</p>
      </footer>
    </section>
  );
};

export default AboutUs;
