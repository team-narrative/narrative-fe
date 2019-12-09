import { postStory } from '../services/stories';

// export const CREATE_STORY = 'CREATE_STORY';
// export const createStory = (story, description) => ({
//   type: CREATE_STORY,
//   payload: postStory(story, description)
// });

export const CREATE_STORY = 'CREATE_STORY';
export const createStory = (userId, storyTitle, storySynopsis, storyGenre, storyTags) => dispatch => {
  postStory(userId, storyTitle, storySynopsis, storyGenre, storyTags)
    .then(newStory =>
      dispatch({
        type: CREATE_STORY,
        payload: newStory
      }));
};