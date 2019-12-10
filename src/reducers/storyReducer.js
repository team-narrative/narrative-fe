import { CREATE_STORY, FETCH_STORY_BY_ID, FETCH_STORY_LIST, DESTROY_STORY_BY_ID } from '../actions/storyActions';

const initialState = {
  stories: [],
  currentStory: {},
  loading: true,
  errors: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_STORY:
      return { ...state, stories: [...state.stories, action.payload] };
    case FETCH_STORY_LIST:
      return { ...state, stories: action.payload };
    case FETCH_STORY_BY_ID:
      return { ...state, currentStory: action.payload };
    case DESTROY_STORY_BY_ID:
      return { ...state, stories: [...state.stories.slice(0, action.payload)] };
    default:
      return state;
  }
}