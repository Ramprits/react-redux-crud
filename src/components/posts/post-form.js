import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post-action';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onSaveForm = this.onSaveForm.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onSaveForm(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  }
  onChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-sm-12 offset-md-3">
          <form onSubmit={this.onSaveForm}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                onChange={this.onChangeInput}
                id="title"
                name="title"
                value={this.state.title}
                placeholder="Enter title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                type="text"
                name="body"
                id="body"
                onChange={this.onChangeInput}
                className="form-control"
                value={this.state.body}
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { createPost }
)(PostForm);
