import { CREATE_CHAPTER, FETCH_CHAPTERS_BY_STORY_ID, EDIT_CHAPTER_BY_CHAPTER_ID, DESTROY_CHAPTER_BY_ID } from '../actions/chapterActions';

const initialState = {
  currentChapterStory: '',
  currentStoryChapters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_CHAPTER:
      return { ...state, currentStoryChapters: [...state.currentStoryChapters, action.payload] };
    case FETCH_CHAPTERS_BY_STORY_ID:
      return { ...state, currentStoryChapters: action.payload };
    case EDIT_CHAPTER_BY_CHAPTER_ID:
      return { ...state, currentStoryChapters: state.currentStoryChapters.map(chapter => {
        return chapter._id === action.payload._id ? action.payload : chapter;
      }) };
    case DESTROY_CHAPTER_BY_ID:
      return { ...state, currentStoryChapters: state.currentStoryChapters.filter((chapter) => {
        return chapter._id !== action.payload._id;
      }) };
    default:
      return state;
  }
}