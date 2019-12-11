import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Character from './Character';
import { getCharacterList } from '../../selectors/characterSelectors';

const CharacterList = () => {

  // Need to somehow get the selected story's id
  // Need to then fetch all characters associated with that current story based on id
  // Feed this character array into the map below. 

  const characters = useSelector(state => getCharacterList(state));

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