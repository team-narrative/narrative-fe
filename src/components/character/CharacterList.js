import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const storyCharacters = characters.map((character, i) => {
    return (
      <li key={character._id || i}>
        <Character currentName={character.characterName} currentDescription={character.characterDescription}/>
      </li>
    );
  });

  return (
    <ul>
      {storyCharacters}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
};

export default CharacterList;