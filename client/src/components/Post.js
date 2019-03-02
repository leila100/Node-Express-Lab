import React from "react"
import { Link } from "react-router-dom"

import { PostWrapper, IconWrapper, Info } from "../styles/PostStyles"

const Post = props => {
  return (
    <PostWrapper>
      <Info>
        <Link to={`/${props.post.id}`}>
          <span>Post Title:</span> {props.post.title}
        </Link>
      </Info>
      <Info>
        <span>Post Content:</span> <p>{props.post.contents}</p>
      </Info>
      <IconWrapper>
        <i
          className="fas fa-minus-square"
          onClick={() => props.toggle(props.post.id)}
        />
        <i
          className="fas fa-edit"
          onClick={() => props.history.push(`/update/${props.post.id}`)}
        />
      </IconWrapper>
    </PostWrapper>
  )
}

export default Post
