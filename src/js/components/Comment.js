import React, { Component } from 'react'
import { CommentOption, ToggleComments } from '../components'
import '../../scss/comment.scss'

class Comment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      author, author_id, datetime, id, title, className, discussion, user_id,
      comment, children, comments, deleted, dispatch, hide_children
    } = this.props
    let titleEl, editEl, toggleComments
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
    if (deleted) {
      return (
        <div>
          <div className={className}>
            <span className='deleted'><i>Message deleted by user.</i></span>
          </div>
          {children}
        </div>
      )
    }
    if (comments && comments.length && (!title && !discussion)) {
      toggleComments = <ToggleComments dispatch={dispatch} id={id}/>
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
          <div className='message-container'>
            <div className='toggle-comments'>
              {toggleComments}
            </div>
            <div className='message' dangerouslySetInnerHTML={discussionHTML}></div>
          </div>
        </div>
        {hide_children ? null : children}
      </div>
    )
  }
}

export default Comment
