import { combineReducers } from 'redux';
import PostReducers from './post-reducers';
import CommentReducers from './comment-reducers';

export default combineReducers({
  posts: PostReducers,
  comments: CommentReducers
});
