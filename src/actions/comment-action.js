import { FETCH_COMMENTS } from './types';
import axios from 'axios';

export const fetchComments = () => dispatch => {
  axios.get(`https://jsonplaceholder.typicode.com/comments`).then(comments => {
    dispatch({
      type: FETCH_COMMENTS,
      payload: comments.data
    });
  });
};
