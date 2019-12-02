import { combineReducers } from 'redux';
import authReducer from './authReducer';
import imageReducer from './imageReducer';

export default combineReducers({
  auth: authReducer,
  images: imageReducer,
});
