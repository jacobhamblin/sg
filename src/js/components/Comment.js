import React, { Component } from 'react'
import { CommentOption, ToggleComments, Timestamp } from '../components'
import { editComment } from '../actions'
import '../../scss/comment.scss'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.editClick = this.editClick.bind(this)
    this.removeClick = this.removeClick.bind(this)
    this.cancelEditClick = this.cancelEditClick.bind(this)
    this.saveEditClick = this.saveEditClick.bind(this)
    this.state = {
      editing: false
    }
  }

  editClick() {
    this.setState({
      editing: true
    })
  }

  cancelEditClick() {
    this.setState({
      editing: false
    })
  }

  saveEditClick() {
    const { dispatch, id } = this.props

    dispatch(editComment(id, this._textarea.value))
    this.setState({
      editing: false
    })
  }

  removeClick() {
    console.log('remove click')
  }

  render() {
    let {
      author, author_id, datetime, id, title, className, discussion, user_id,
      comment, children, comments, deleted, dispatch, hide_children, depth
    } = this.props
    let { editing } = this.state

    let titleEl, editEl, toggleComments, editingOptions
    let discussionHTML = { __html: discussion || comment}
    let messageContClass = 'message-container'
    if (editing) {
      messageContClass += ' edit'
      editingOptions = (
        <div className='editing-options'>
          <a href="javascript:void(0)" onClick={this.saveEditClick}>save</a> | <a href="javascript:void(0)" onClick={this.cancelEditClick}>cancel</a>
        </div>
      )
    }
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
          <CommentOption className='edit' clickFunction={this.editClick}/>
          <CommentOption className='remove' clickFunction={this.removeClick}/>
        </div>
      )
    }
    if (depth > 0) {
      switch(depth) {
        case 1:
        className += ' one'
        break
        case 2:
        className += ' two'
        break
        case 3:
        className += ' three'
        break
        case 4:
        className += ' four'
        break
      }
    }
    if (deleted) {
      return (
        <div>
          <div className={className + ' deleted'}>
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
          <div className={messageContClass}>
            <div className='toggle-comments'>
              {toggleComments}
            </div>
            <p className='message' dangerouslySetInnerHTML={discussionHTML}></p>
            <textarea className='message textarea' defaultValue={discussion || comment} ref={n => {this._textarea = n}}></textarea>
          </div>
          <div className='lower-bar'>
            <Timestamp timestamp={datetime}/>
            {editingOptions}
          </div>
        </div>
        {hide_children ? null : children}
      </div>
    )
  }
}

export default Comment
