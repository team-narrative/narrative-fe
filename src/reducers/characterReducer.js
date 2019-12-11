import { CREATE_CHARACTER, FETCH_CHARACTERS_BY_STORY_ID, FETCH_CHARACTER_LIST } from '../actions/characterActions';

const initialState = {
  characters: [],
  currentCharacterStory: '',
  currentStoryCharacters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // Creates a character and adds it to the characters array
    case CREATE_CHARACTER:
      return { ...state, characters: [...state.characters, action.payload] };
    // Characters by user
    case FETCH_CHARACTER_LIST:
      return { ...state, characters: action.payload };
    // Characters by story
    case FETCH_CHARACTERS_BY_STORY_ID:
      return { ...state, currentStoryCharacters: action.payload };
    default:
      return state;
  }
}