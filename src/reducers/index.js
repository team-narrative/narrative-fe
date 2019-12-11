import { combineReducers } from 'redux';
import story from './storyReducer';
import character from './characterReducer';

export default combineReducers({
  story,
  character
});