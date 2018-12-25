import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
      this.setState({ posts: response.data });
    });
  }
  render() {
    return (
      <div>
        <div className="d-flex">
        <Link to="/addpost" className="btn-primary btn btn-sm"> Add New Post</Link>
        </div>
        {this.state.posts.map(post => {
          return (
            <div className="card mt-2" key={post.id}>
              <div class="card-body">
                <h3 className="mr-4">{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
