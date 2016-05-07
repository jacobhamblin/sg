import React, { Component } from 'react'
import { Comment } from '../components'

function displayComments(comment) {
  debugger
  if (comment.comments) {
    comment.comments.map(displayComments)
  }
  let className = 'comment'
  if (comment.title && comment.discussion) className += ' starter'
  return (
    <Comment
      author={comment.author}
      author_id={comment.author_id}
      datetime={comment.datetime}
      id={comment.id}
      title={comment.title}
      discussion={comment.discussion}
      comment={comment.comment}
      comments={comment.comments}
      className={className}
    >
      {comment.comments ? comment.comments.map(displayComments) : null}
    </Comment>
  )
}

const Comments = ({ discussion, children }) => {
  return (
    <div className="comments">
      {displayComments(discussion)}
    </div>
  )
}

export default Comments
