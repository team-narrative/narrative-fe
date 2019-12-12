import { combineReducers } from 'redux';
import story from './storyReducer';
import character from './characterReducer';
import chapter from './chapterReducer';
import location from './locationReducer';

export default combineReducers({
  story,
  character,
  chapter,
  location
});