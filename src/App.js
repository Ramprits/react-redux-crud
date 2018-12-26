import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/header';
import Posts from './components/posts';
import Comments from './components/comments/comments';
import PostForm from './components/posts/post-form';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container mt-3">
              <Route exact path="/" component={Posts} />
              <Route exact path="/comments" component={Comments} />
              <Route exact path="/addpost" component={PostForm} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
