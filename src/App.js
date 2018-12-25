import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Posts from "./components/posts";
import PostForm from "./components/posts/post-form";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container mt-3">
            <Route exact path="/" component={Posts} />
            <Route exact path="/addpost" component={PostForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
