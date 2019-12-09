import { post, get, del } from './request';

const STORIES_URL = 'http://localhost:7891/api/v1/stories';

const object = {
  _id: '5deae98ea570c71d0d72f32c',
  storyGenre: [
    '1',
    '2',
    '3'
  ],
  storyTags: [
    '4',
    '5',
    '6'
  ],
  userId: 'google-oauth2|118368993998802392483',
  storyTitle: 'Story #1',
  storySynopsis: 'Story #1 Synopsis',
  __v: 0,
  characters: [],
  worlds: [],
  locations: [
    {
      _id: '5deaecfb1bbcaa1d3f55805b',
      locationTags: [
        '1',
        '2',
        '3'
      ],
      locationStoryId: '5deae98ea570c71d0d72f32c',
      userId: 'google-oauth2|118368993998802392483',
      locationName: 'Location #1, Story #1',
      locationDescription: 'Location #1 Description, Story #1'
    }
  ],
  chapters: [
    {
      _id: '5deaea56a570c71d0d72f32f',
      chapterTags: [
        '1',
        '2',
        '3'
      ],
      chapterStoryId: '5deae98ea570c71d0d72f32c',
      userId: 'google-oauth2|118368993998802392483',
      chapterName: 'Chapter #2, Story #1 EDIT PUT TAKE 2',
      chapterText: 'Chapter #2, Story #1 Text'
    }
  ]
};

export const getStories = () => {
  return object;
};

export const postStory = (userId, storyTitle, storySynopsis, storyGenre, storyTags) => post(`${STORIES_URL}`,
  {
    userId,
    storyTitle,
    storySynopsis,
    storyGenre,
    storyTags
  });

export const getAllStories = () => get(`${STORIES_URL}`);
export const getStoryByStoryId = (storyId) => get(`${STORIES_URL}/${storyId}`);
export const deleteStoryByStoryId = (storyId) => del(`${STORIES_URL}/${storyId}`);
