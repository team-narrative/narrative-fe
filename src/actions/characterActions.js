import { postCharactersByStoryId, getCharactersByStoryId } from '../services/characters';

export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const createCharacter = (characterStoryId, characterName, characterDescription, characterTags) => dispatch => {
  postCharactersByStoryId(characterStoryId, characterName, characterDescription, characterTags)
    .then(newCharacter =>
      dispatch({
        type: CREATE_CHARACTER,
        payload: newCharacter
      }));
};

export const FETCH_CHARACTERS_BY_STORY_ID = 'FETCH_CHARACTERS_BY_STORY_ID';
export const fetchCharactersByStoryId = (characterStoryId) => dispatch => {
  getCharactersByStoryId(characterStoryId)
    .then(fetchedCharacter =>
      dispatch({
        type: FETCH_CHARACTERS_BY_STORY_ID,
        payload: fetchedCharacter
      }));
};