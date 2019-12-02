import {ADD_IMAGE, FETCH_IMAGES, OPEN_IMAGE, FILTER_IMAGES} from '../actions/types';


export default function imageReducer(state = {}, action) {
  switch(action.type) {
    case ADD_IMAGE:
      return Object.assign({}, state, {imageList: [...state.imageList, action.newImage], filteredImages: [...state.imageList, action.newImage]});
    case FETCH_IMAGES:
      return Object.assign({}, state, {imageList: action.imageList, filteredImages: action.imageList});
    case OPEN_IMAGE:
        return Object.assign({}, state, {currentImage: action.image});
    case FILTER_IMAGES:
        return Object.assign({}, state, {filteredImages: action.images});
    default:
      return state;
  }
}
