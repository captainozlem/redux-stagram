import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
//import root reducer
import rootReducer from './reducers/index';
//importing prepared data from data folder
import comments from './data/comments';
import posts from './data/posts';

// create an object for default data;
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
