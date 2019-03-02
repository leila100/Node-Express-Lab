import React from "react"
import axios from "axios"

import { InfoWrapper, InfoGroup } from "../styles/PostStyles"

class PostInfo extends React.Component {
  state = {
    post: {}
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    this.getPost(id)
  }

  getPost = id => {
    const endpoint = `http://localhost:8080/api/posts/${id}`
    axios
      .get(endpoint)
      .then(response => {
        console.log(response.data[0])
        this.setState({ post: response.data[0] })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log("Post: ", this.state.post)

    return (
      <InfoWrapper>
        <InfoGroup>
          <div>Title: </div>
          <p>{this.state.post.title}</p>
        </InfoGroup>
        <InfoGroup>
          <div>Content: </div>
          <p>{this.state.post.contents}</p>
        </InfoGroup>
        <InfoGroup>
          <div>Created at: </div>
          <p>{this.state.post.created_at}</p>
        </InfoGroup>
        <InfoGroup>
          <div>updated at: </div>
          <p>{this.state.post.updated_at}</p>
        </InfoGroup>
      </InfoWrapper>
    )
  }
}

export default PostInfo
