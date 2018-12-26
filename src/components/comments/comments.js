import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment-action';
class Comments extends Component {
  componentWillMount() {
    this.props.fetchComments();
  }
  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          return <p key={comment.id}>{comment.name}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.items
});

export default connect(
  mapStateToProps,
  { fetchComments }
)(Comments);
