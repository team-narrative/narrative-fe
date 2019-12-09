import { postStory, getAllStories, getStoryByStoryId, deleteStoryByStoryId } from '../services/stories';

export const CREATE_STORY = 'CREATE_STORY';
export const createStory = (userId, storyTitle, storySynopsis, storyGenre, storyTags) => dispatch => {
  postStory(userId, storyTitle, storySynopsis, storyGenre, storyTags)
    .then(newStory =>
      dispatch({
        type: CREATE_STORY,
        payload: newStory
      }));
};

export const FETCH_STORY_LIST = 'FETCH_STORY_LIST';
export const fetchStoryList = () => dispatch => {
  getAllStories()
    .then(allStories => 
      dispatch({
        type: FETCH_STORY_LIST,
        payload: allStories
      }));
};

export const FETCH_STORY_BY_ID = 'FETCH_STORY_BY_ID';
export const fetchStoryById = (storyId) => dispatch => {
  getStoryByStoryId(storyId)
    .then(story => 
      dispatch({
        type: FETCH_STORY_BY_ID,
        payload: story
      }));
};

export const DESTROY_STORY_BY_ID = 'DESTROY_STORY_BY_ID';
export const destroyStoryById = (storyId) => dispatch => {
  deleteStoryByStoryId(storyId)
    .then(destroyedStory => 
      dispatch({
        type: DESTROY_STORY_BY_ID,
        payload: destroyedStory
      })
    );
};

