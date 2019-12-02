import {FETCH_IMAGES, ADD_IMAGE, OPEN_IMAGE, FILTER_IMAGES} from './types';
import axios from 'axios';
axios.defaults.withCredentials = true;

export function fetchAllImages() {
  return((dispatch) => {
    axios.get('/imageApis/get-images')
    .then(function (response) {
      dispatch({
        type: FETCH_IMAGES,
        imageList: response.data
      });
    })
    .catch(function (error) {
      
    });
  });
}


export function addImage(image) {
  return((dispatch) => {
     const postData = new FormData();
     Object.keys(image).forEach(key => postData.append(key, image[key]));
    axios.post('/imageApis/add-image', postData)
    .then(function (response) {
      dispatch({
        type: ADD_IMAGE,
        newImage: response.data
      });
    })
    .catch(function (error) {
     
    });
  });
}

export function openImage(image) {
  return({
    type: OPEN_IMAGE,
    image
  });
}

export function filterImages(images) {
  return({
    type: FILTER_IMAGES,
    images
  });
}
