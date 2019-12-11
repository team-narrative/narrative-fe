import { postCharactersByStoryId } from '../services/characters';

export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const createCharacter = (characterStoryId, characterName, characterDescription, characterTags) => dispatch => {
  postCharactersByStoryId(characterStoryId, characterName, characterDescription, characterTags)
    .then(newCharacter =>
      dispatch({
        type: CREATE_CHARACTER,
        payload: newCharacter
      }));
};