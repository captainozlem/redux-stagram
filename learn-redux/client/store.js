import { createStore, compose } from 'redux';
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

// this is for using Redux dev tool properly
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// this is for hot reloading the reducers
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
