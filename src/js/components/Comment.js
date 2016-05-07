import React, { Component } from 'react'
import { CommentOption } from '../components'
import '../../scss/comment.scss'

const Comment = ({author, author_id, datetime, id, title, className}) => {
  return (
    <div className={className}>
      <div className='status-bar'>
        <div className='edit-container'>
          <div className='options-container'>
            <CommentOption className='edit'/>
            <CommentOption className='remove'/>
          </div>
        </div>
      </div>
      <div className='comment-container'>
        <div className='avatar'>
        </div>
        <ul>
          <li>{author}</li>
          <li>{author_id}</li>
          <li>{datetime}</li>
          <li>{id}</li>
          <li>{title}</li>
        </ul>
      </div>
    </div>
  )
}

export default Comment
