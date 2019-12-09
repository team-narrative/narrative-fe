import { post, get, del } from './request';

const STORIES_URL = 'http://localhost:7891/api/v1/stories';

export const postStory = (storyTitle, storySynopsis, storyGenre, storyTags) => post(`${STORIES_URL}`,
  {
    storyTitle,
    storySynopsis,
    storyGenre,
    storyTags
  });

export const getAllStories = () => get(`${STORIES_URL}`);
export const getStoryByStoryId = (storyId) => get(`${STORIES_URL}/${storyId}`);
export const deleteStoryByStoryId = (storyId) => del(`${STORIES_URL}/${storyId}`);
