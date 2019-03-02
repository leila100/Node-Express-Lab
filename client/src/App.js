import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import axios from "axios"

import Navbar from "./components/Navbar"
import PostsList from "./containers/PostsList"
import PostForm from "./components/PostForm"
import PostInfo from "./components/PostInfo"

class App extends Component {
  state = {
    posts: [],
    currentPost: {}
  }

  componentDidMount = () => {
    this.fetchPosts()
  }

  fetchPosts = () => {
    const endpoint = "http://localhost:8080/api/posts"
    axios
      .get(endpoint)
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch(err => console.log(err))
  }

  deleteHandler = postId => {
    const endpoint = `http://localhost:8080/api/posts/${postId}`
    axios
      .delete(endpoint)
      .then(response => {
        this.fetchPosts()
      })
      .catch(err => console.log(err))
  }

  addPostHandler = (post, history) => {
    const endpoint = "http://localhost:8080/api/posts"
    axios
      .post(endpoint, post)
      .then(response => {
        this.fetchPosts()
        history.push("/")
      })
      .catch(err => console.log(err))
  }

  updatePostHandler = (post, id, history) => {
    const endpoint = `http://localhost:8080/api/posts/${id}`
    axios
      .put(endpoint, post)
      .then(response => {
        this.fetchPosts()
        history.push("/")
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <PostsList
                {...props}
                posts={this.state.posts}
                delete={this.deleteHandler}
              />
            )}
          />

          <Route
            exact
            path="/add"
            render={props => (
              <PostForm
                {...props}
                posts={this.state.posts}
                actionType="Add"
                addPost={this.addPostHandler}
              />
            )}
          />
          <Route
            path="/update/:id"
            render={props => (
              <PostForm
                {...props}
                posts={this.state.posts}
                actionType="Update"
                updatePost={this.updatePostHandler}
              />
            )}
          />
          <Route
            path="/:id"
            render={props => <PostInfo {...props} posts={this.state.posts} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
