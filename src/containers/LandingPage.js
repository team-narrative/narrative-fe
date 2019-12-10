import React from 'react';
import { Link }  from 'react-router-dom';
import styles from './LandingPage.css';


const LandingPage = () => {




  return (
    <div name="landingPage" className={styles.Parallax}>
      <ul id="scene" data-friction-x="0.03"
        data-friction-y="0.05">
        <li name={styles.layer} id="specks" data-depth="0.1"></li>
        <li name="layer" id="layer-1" data-depth="0.15">
          <div name="img" id="img-1"></div>
        </li>
        <li name="layer" id="layer-2" data-depth="0.25">
          <div name="img" id="img-2"></div>
        </li>
        <li name="layer" id="layer-3" data-depth="0.45">
          <div name="img" id="img-3"></div>
        </li>
      </ul>
      <Link to={'/stories'}>Click To Get Started</Link>
    </div>

  ); 
};

export default LandingPage;
