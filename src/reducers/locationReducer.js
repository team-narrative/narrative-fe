import { CREATE_LOCATION, FETCH_LOCATIONS_BY_STORY_ID, EDIT_LOCATION_BY_LOCATION_ID, DESTROY_LOCATION_BY_ID } from '../actions/locationActions';


const initialState = {
  currentLocationStory: '',
  currentStoryLocations: []
};
export default function reducer(state = initialState, action) {
  switch(action.type) {
    // Creates a location and adds it to the locations array
    case CREATE_LOCATION:
      return { ...state, currentStoryLocations: [...state.currentStoryLocations, action.payload] };
    // Locations by story
    case FETCH_LOCATIONS_BY_STORY_ID:
      return { ...state, currentStoryLocations: action.payload };
    case EDIT_LOCATION_BY_LOCATION_ID:
      return { ...state, currentStoryLocations: state.currentStoryLocations.map(location => {
        return location._id === action.payload._id ? action.payload : location;
      }) };
    case DESTROY_LOCATION_BY_ID:
      return { ...state, currentStoryLocations: state.currentStoryLocations.filter((location) => {
        return location._id !== action.payload._id;
      }) };
    default:
      return state;
  }
}