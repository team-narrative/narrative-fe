import { CREATE_WORLD, FETCH_WORLDS_BY_STORY_ID, EDIT_WORLD_BY_WORLD_ID, DESTROY_WORLD_BY_ID } from '../actions/worldActions';

const initialState = {
  currentWorldStory: '',
  currentStoryWorlds: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // Creates a world and adds it to the worlds array
    case CREATE_WORLD:
      return { ...state, currentStoryWorlds: [...state.currentStoryWorlds, action.payload] };
    // Worlds by story
    case FETCH_WORLDS_BY_STORY_ID:
      return { ...state, currentStoryWorlds: action.payload };
    case EDIT_WORLD_BY_WORLD_ID:
      return { ...state, currentStoryWorlds: state.currentStoryWorlds.map(world => {
        return world._id === action.payload._id ? action.payload : world;
      }) };
    case DESTROY_WORLD_BY_ID:
      return { ...state, currentStoryWorlds: state.currentStoryWorlds.filter((world) => {
        return world._id !== action.payload._id;
      }) };
    default:
      return state;
  }
}