import React, { Component } from 'react'
import { fetchDiscussion } from '../actions'
import { connect } from 'react-redux'
import { Comment } from '../components'

function displayComments(comment, user_id, dispatch, i) {
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
      user_id={user_id}
      deleted={comment.deleted}
      dispatch={dispatch}
      hide_children={comment.hide_children}
      depth={i}
    >
      {comment.comments ? comment.comments.map(c => displayComments(c, user_id, dispatch, i + 1)) : null}
    </Comment>
  )
}

class Discussion extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchDiscussion(1))
  }

  render() {
    const { discussion, id, user_id, dispatch } = this.props

    return (
      <div>
        {discussion ? displayComments(discussion, user_id, dispatch, -1) : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { discussion, user_id, id } = state
  return {
    discussion,
    user_id,
    id
  }
}

export default connect(mapStateToProps)(Discussion)
