import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';
export const fetchPosts = () => dispatch => {
  axios.get(`https://jsonplaceholder.typicode.com/posts`).then(posts => {
    dispatch({
      type: FETCH_POSTS,
      payload: posts.data
    });
  });
  console.log(Date.now());
};

export const createPost = postData => dispatch => {
  axios
    .post(`https://jsonplaceholder.typicode.com/posts`, postData)
    .then(post => {
      dispatch({
        type: NEW_POST,
        payload: post.data
      });
    });
  console.log(Date.now());
};
