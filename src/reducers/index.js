import { combineReducers } from 'redux';
import PostReducers from './post-reducers';

export default combineReducers({
  posts: PostReducers
});
