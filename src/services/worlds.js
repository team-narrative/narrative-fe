import { post, get, put, del } from './request';

const WORLDS_URL = 'http://localhost:7891/api/v1/worlds';

export const postWorldByStoryId = (worldStoryId, worldName, worldDescription, worldTags) => post(`${WORLDS_URL}/${worldStoryId}`,
  {
    worldName,
    worldDescription,
    worldTags
  });

export const getAllWorlds = () => get(`${WORLDS_URL}`);
export const getWorldsByStoryId = (worldStoryId) => get(`${WORLDS_URL}/${worldStoryId}`);
export const putWorldByWorldId = (worldId) => put(`${WORLDS_URL}/${worldId}`);
export const deleteWorldByWorldId = (worldId) => del(`${WORLDS_URL}/${worldId}`);
