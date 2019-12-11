import { CREATE_CHARACTER, FETCH_CHARACTERS_BY_STORY_ID } from '../actions/characterActions';

const initialState = {
  characters: [],
  currentCharacterStory: '',
  currentStoryCharacters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_CHARACTER:
      return { ...state, characters: [...state.characters, action.payload], currentCharacterStory: action.payload.characterStoryId };
    case FETCH_CHARACTERS_BY_STORY_ID:
      return { ...state, currentStoryCharacters: [...state.currentStoryCharacters, action.payload] };
    default:
      return state;
  }
}