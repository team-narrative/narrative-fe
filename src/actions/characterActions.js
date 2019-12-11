import { postCharactersByStoryId, getCharactersByStoryId, getAllCharacters, putCharacterByCharacterId, deleteCharacterByCharacterId } from '../services/characters';

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

export const EDIT_CHARACTER_BY_CHARACTER_ID = 'EDIT_CHARACTER_BY_CHARACTER_ID';
export const editCharacterByCharacterId = (characterId, characterName, characterDescription) => dispatch => {
  putCharacterByCharacterId(characterId, characterName, characterDescription)
    .then(editedCharacter => 
      dispatch({
        type: EDIT_CHARACTER_BY_CHARACTER_ID,
        payload: editedCharacter
      })
    );
};

export const DESTROY_CHARACTER_BY_ID = 'DESTROY_CHARACTER_BY_ID';
export const destroyCharacterById = (characterId) => dispatch => {
  deleteCharacterByCharacterId(characterId)
    .then(deletedCharacter => 
      dispatch({
        type: DESTROY_CHARACTER_BY_ID,
        payload: deletedCharacter
      })
    );
};