import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const localStorageUser = JSON.parse(localStorage.getItem('splitterUser'));


const initialState = {
  auth: {
    authenticated: localStorageUser === null ? false : true,
    loggedinUser: localStorageUser === null ? null : localStorageUser,
    registrationErrors: [],
    loginErrors: [],
  },
  images: {
    imageList: [],
    filteredImages:  [],
    currentImage: null
  }

};


const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  )
);

export default store;
