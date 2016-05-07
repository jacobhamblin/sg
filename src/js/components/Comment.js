import React, { Component } from 'react'
import { CommentOption } from '../components'
import '../../scss/comment.scss'

class Comment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      author, author_id, datetime, id, title, className, discussion, user_id,
      comment, children, comments
    } = this.props
    let titleEl, editEl
    let discussionHTML = { __html: discussion || comment}

    if (title) {
      titleEl = (
        <div className='title-bar'>
          <h3 className='title'>{title}</h3>
        </div>
      )
    }
    if (user_id === author_id) {
      editEl = (
        <div className='options-container'>
          <CommentOption className='edit'/>
          <CommentOption className='remove'/>
        </div>
      )
    }

    return (
      <div>
        <div className={className}>
          {titleEl}
          <div className='user-container'>
            <div className='avatar'></div>
            <span className='author'>{author}</span>
            {editEl}
          </div>
          <div className='message' dangerouslySetInnerHTML={discussionHTML}></div>
        </div>
        {children}
      </div>
    )
  }
}

export default Comment
