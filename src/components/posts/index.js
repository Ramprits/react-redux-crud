import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post-action';
class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="d-flex">
          <Link to="/addpost" className="btn-primary btn btn-sm">
            {'Add New Post'}
          </Link>
        </div>
        {this.props.posts.map(post => {
          return (
            <div className="card mt-2" key={post.id}>
              <div className="card-body">
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

const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
