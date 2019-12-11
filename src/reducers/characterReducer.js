import { CREATE_CHARACTER } from '../actions/characterActions';

const initialState = {
  characters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_CHARACTER:
      return { ...state, characters: [...state.characters, action.payload] };
    default:
      return state;
  }
}