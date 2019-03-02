import React, { Component } from "react"
import axios from "axios"
import Zoom from "react-reveal/Zoom"

import { Form, Button } from "../styles/formStyles"

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postInfo: {
        title: "",
        contents: ""
      }
    }
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    if (id) this.getPost(id)
  }

  getPost = id => {
    const endpoint = `http://localhost:8080/api/posts/${id}`
    axios
      .get(endpoint)
      .then(response => {
        this.setState({ postInfo: response.data[0] })
      })
      .catch(err => console.log(err))
  }

  saveInput = event => {
    const newInfo = { ...this.state.postInfo }
    newInfo[event.target.name] = event.target.value
    this.setState({ postInfo: newInfo })
  }

  action = event => {
    event.preventDefault()
    if (this.props.actionType === "Add")
      this.props.addPost(this.state.postInfo, this.props.history)
    else if (this.props.actionType === "Update")
      this.props.updatePost(
        this.state.postInfo,
        this.props.match.params.id,
        this.props.history
      )
  }

  render() {
    return (
      <Zoom>
        <Form onSubmit={this.action}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.postInfo.title}
            onChange={this.saveInput}
          />
          <textarea
            name="contents"
            rows="5"
            placeholder="Contents"
            value={this.state.postInfo.contents}
            onChange={this.saveInput}
          />
          <Button color="primary">{this.props.actionType} Post</Button>
        </Form>
      </Zoom>
    )
  }
}

export default PostForm
