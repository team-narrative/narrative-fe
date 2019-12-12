import { postChapterByStoryId, getChaptersByStoryId, deleteChapterByChapterId, putChapterByChapterId } from '../services/chapters';

export const CREATE_CHAPTER = 'CREATE_CHAPTER';
export const createChapter = (chapterStoryId, chapterName, chapterText, chapterTags) => dispatch => {
  postChapterByStoryId(chapterStoryId, chapterName, chapterText, chapterTags)
    .then(newChapter =>
      dispatch({
        type: CREATE_CHAPTER,
        payload: newChapter
      }));
};

export const FETCH_CHAPTERS_BY_STORY_ID = 'FETCH_CHAPTERS_BY_STORY_ID';
export const fetchChaptersByStoryId = (chapterStoryId) => dispatch => {
  getChaptersByStoryId(chapterStoryId)
    .then(fetchedChapter =>
      dispatch({
        type: FETCH_CHAPTERS_BY_STORY_ID,
        payload: fetchedChapter
      }));
};

export const EDIT_CHAPTER_BY_CHAPTER_ID = 'EDIT_CHAPTER_BY_CHAPTER_ID';
export const editChapterByChapterId = (chapterId, chapterName, chapterText) => dispatch => {
  putChapterByChapterId(chapterId, chapterName, chapterText)
    .then(editedChapter => 
      dispatch({
        type: EDIT_CHAPTER_BY_CHAPTER_ID,
        payload: editedChapter
      })
    );
};

export const DESTROY_CHAPTER_BY_ID = 'DESTROY_CHAPTER_BY_ID';
export const destroyChapterById = (chapterId) => dispatch => {
  deleteChapterByChapterId(chapterId)
    .then(deletedChapter => 
      dispatch({
        type: DESTROY_CHAPTER_BY_ID,
        payload: deletedChapter
      })
    );
};