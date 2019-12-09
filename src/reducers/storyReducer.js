import { CREATE_STORY } from '../actions/storyActions';

const initialState = {
  stories: [],
  loading: true,
  errors: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_STORY:
      return { ...state, stories: [...state.stories, action.payload] };
    default:
      return state;
  }
}