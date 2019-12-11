import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';

const Footer = () => (
  <footer className={styles.Footer}>
    <p>&copy; Narrative 2019</p>
    <Link to={'/about-us'}>About Us</Link>
  </footer>
);

export default Footer;