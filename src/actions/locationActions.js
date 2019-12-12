import { postLocationsByStoryId, getLocationsByStoryId, putLocationByLocationId, deleteLocationByLocationId } from '../services/locations';

export const CREATE_LOCATION = 'CREATE_LOCATION';
export const createLocation = (locationStoryId, locationName, locationDescription, locationTags) => dispatch => {
  postLocationsByStoryId(locationStoryId, locationName, locationDescription, locationTags)
    .then(newLocation =>
      dispatch({
        type: CREATE_LOCATION,
        payload: newLocation
      }));
};

export const FETCH_LOCATIONS_BY_STORY_ID = 'FETCH_LOCATIONS_BY_STORY_ID';
export const fetchLocationsByStoryId = (locationStoryId) => dispatch => {
  getLocationsByStoryId(locationStoryId)
    .then(fetchedLocation =>
      dispatch({
        type: FETCH_LOCATIONS_BY_STORY_ID,
        payload: fetchedLocation
      }));
};

export const EDIT_LOCATION_BY_LOCATION_ID = 'EDIT_LOCATION_BY_LOCATION_ID';
export const editLocationByLocationId = (locationId, locationName, locationDescription) => dispatch => {
  putLocationByLocationId(locationId, locationName, locationDescription)
    .then(editedLocation => 
      dispatch({
        type: EDIT_LOCATION_BY_LOCATION_ID,
        payload: editedLocation
      })
    );
};

export const DESTROY_LOCATION_BY_ID = 'DESTROY_LOCATION_BY_ID';
export const destroyLocationById = (locationId) => dispatch => {
  deleteLocationByLocationId(locationId)
    .then(deletedLocation => 
      dispatch({
        type: DESTROY_LOCATION_BY_ID,
        payload: deletedLocation
      })
    );
};