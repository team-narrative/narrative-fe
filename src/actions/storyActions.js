import { postStory } from '../services/narrativeApi';

export const CREATE_STORY = 'CREATE_STORY';
export const createStory = (story, description) => ({
  type: CREATE_STORY,
  payload: postStory(story, description)
});