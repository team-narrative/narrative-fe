import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  let storyCharacters;
  if(characters.length > 0) {
    storyCharacters = characters.map((character, i) => {
      return (
        <li key={character._id || i}>
          <Character currentName={character.characterName} currentDescription={character.characterDescription}/>
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {storyCharacters}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
};

export default CharacterList;