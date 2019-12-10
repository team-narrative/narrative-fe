import React from 'react';
import PropTypes from 'prop-types';
import ViewAllButton from './ViewAllButton';
import AddCharacterButton from './AddCharacterButton';

const CharacterCategory = ({ handleViewCharacters, show, hideModal, showModal }) => {
  return (
    <section>
      <h2>Characters</h2>

      <div>
        <AddCharacterButton show={show} hideModal={hideModal} showModal={showModal} />
        <ViewAllButton handleViewClick={handleViewCharacters} />
      </div>
    </section>
  );
};

CharacterCategory.propTypes = {
  handleViewCharacters: PropTypes.func.isRequired,
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default CharacterCategory;