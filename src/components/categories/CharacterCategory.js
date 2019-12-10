import React from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import ViewAllButton from './ViewAllButton';
import styles from './CharacterCategory.css';

const CharacterCategory = ({ handleAddCharacter, handleViewCharacters }) => {
  return (
    <section className={styles.CharacterCategory}>
      <h2>Characters</h2>

      <div>
        <AddButton handleAddClick={handleAddCharacter} />
        <ViewAllButton handleViewClick={handleViewCharacters} />
      </div>
    </section>
  );
};

CharacterCategory.propTypes = {
  handleAddCharacter: PropTypes.func.isRequired,
  handleViewCharacters: PropTypes.func.isRequired
};

export default CharacterCategory;