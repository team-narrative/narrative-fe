import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewAllButton from './ViewAllButton';
import styles from './CharacterCategory.css';
import AddCharacterButton from './AddCharacterButton';

const CharacterCategory = ({ show, hideModal, showModal }) => {
  const [redirect, setRedirect] = useState(false);

  if(redirect) return <Redirect to="/characters" />;
  const handleViewCharacters = () => {
    setRedirect(true);
  };

  return (
    <section className={styles.CharacterCategory}>
      <h2 className={styles.h2}>Characters</h2>


      <div className={styles.CharacterCategoryContainer}>
        <AddCharacterButton show={show} hideModal={hideModal} showModal={showModal} />
        <ViewAllButton handleViewClick={handleViewCharacters} />
      </div>
    </section>
  );
};

CharacterCategory.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default CharacterCategory;