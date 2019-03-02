import React, { Component } from "react"
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap"
import Zoom from "react-reveal/Zoom"

import Post from "../components/Post"
import { PostsWrapper } from "../styles/PostStyles"

class PostsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      postId: ""
    }
  }

  toggle = id => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      postId: id
    }))
  }

  deleteHandler = event => {
    event.preventDefault()
    this.props.delete(this.state.postId)
    this.toggle()
  }

  render() {
    return (
      <>
        <Zoom>
          <PostsWrapper>
            {this.props.posts.map(post => (
              <Post
                post={post}
                key={post.id}
                toggle={this.toggle}
                history={this.props.history}
              />
            ))}
          </PostsWrapper>
        </Zoom>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          size="sm"
          centered={true}
        >
          <ModalHeader toggle={this.toggle}>Delete?</ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.deleteHandler}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default PostsList
