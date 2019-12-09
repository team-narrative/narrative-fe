import { post, get, put, del } from './request';

const CHAPTERS_URL = 'http://localhost:7891/api/v1/chapters';

export const postChapterByStoryId = (chapterStoryId, chapterName, chapterText, chapterTags) => post(`${CHAPTERS_URL}/${chapterStoryId}`,
  {
    chapterName,
    chapterText,
    chapterTags
  });

export const getAllChapters = () => get(`${CHAPTERS_URL}`);
export const getChaptersByStoryId = (chapterStoryId) => get(`${CHAPTERS_URL}/${chapterStoryId}`);
export const putChapterByChapterId = (chapterId) => put(`${CHAPTERS_URL}/${chapterId}`);
export const deleteChapterByChapterId = (chapterId) => del(`${CHAPTERS_URL}/${chapterId}`);