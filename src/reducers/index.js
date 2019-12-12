import { combineReducers } from 'redux';
import story from './storyReducer';
import character from './characterReducer';
import chapter from './chapterReducer';
import location from './locationReducer';
import world from './worldReducer';

export default combineReducers({
  story,
  character,
  chapter,
  location,
  world
});