import { postWorldsByStoryId, getWorldsByStoryId, putWorldByWorldId, deleteWorldByWorldId } from '../services/worlds';

export const CREATE_WORLD = 'CREATE_WORLD';
export const createWorld = (worldStoryId, worldName, worldDescription, worldTags) => dispatch => {
  postWorldsByStoryId(worldStoryId, worldName, worldDescription, worldTags)
    .then(newWorld =>
      dispatch({
        type: CREATE_WORLD,
        payload: newWorld
      }));
};

export const FETCH_WORLDS_BY_STORY_ID = 'FETCH_WORLDS_BY_STORY_ID';
export const fetchWorldsByStoryId = (worldStoryId) => dispatch => {
  getWorldsByStoryId(worldStoryId)
    .then(fetchedWorld =>
      dispatch({
        type: FETCH_WORLDS_BY_STORY_ID,
        payload: fetchedWorld
      }));
};

export const EDIT_WORLD_BY_WORLD_ID = 'EDIT_WORLD_BY_WORLD_ID';
export const editWorldByWorldId = (worldId, worldName, worldDescription) => dispatch => {
  putWorldByWorldId(worldId, worldName, worldDescription)
    .then(editedWorld => 
      dispatch({
        type: EDIT_WORLD_BY_WORLD_ID,
        payload: editedWorld
      })
    );
};

export const DESTROY_WORLD_BY_ID = 'DESTROY_WORLD_BY_ID';
export const destroyWorldById = (worldId) => dispatch => {
  deleteWorldByWorldId(worldId)
    .then(deletedWorld => 
      dispatch({
        type: DESTROY_WORLD_BY_ID,
        payload: deletedWorld
      })
    );
};