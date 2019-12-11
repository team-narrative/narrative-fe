import { CREATE_CHARACTER, FETCH_CHARACTERS_BY_STORY_ID, EDIT_CHARACTER_BY_CHARACTER_ID, DESTROY_CHARACTER_BY_ID } from '../actions/characterActions';

const initialState = {
  currentCharacterStory: '',
  currentStoryCharacters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // Creates a character and adds it to the characters array
    case CREATE_CHARACTER:
      return { ...state, currentStoryCharacters: [...state.characters, action.payload] };
    // Characters by story
    case FETCH_CHARACTERS_BY_STORY_ID:
      return { ...state, currentStoryCharacters: action.payload };
    case EDIT_CHARACTER_BY_CHARACTER_ID:
      return { ...state, currentStoryCharacters: state.currentStoryCharacters.map(character => {
        return character._id === action.payload._id ? action.payload : character;
      }) };
    case DESTROY_CHARACTER_BY_ID:
      return { ...state, currentStoryCharacters: state.currentStoryCharacters.filter((character) => {
        return character._id !== action.payload._id;
      }) };
    default:
      return state;
  }
}