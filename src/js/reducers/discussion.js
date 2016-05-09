import {
  RESET_STATE, REQUEST_DISCUSSION, RECEIVE_DISCUSSION, TOGGLE_COMMENTS, EDIT_COMMENT, DELETE_COMMENT
} from '../actions'

function changeText(comment, text) {
  comment.discussion ? comment.discussion = text : comment.comment = text
}

function deleteComment(comment) {
  comment.deleted = true
}

function toggleCommentVisibility(comment) {
  comment.hide_children = !comment.hide_children
}

export function findComment(queue, id) {
  while (queue.length) {
    let comment = queue.pop()
    if (comment.id === id && (!comment.title && !comment.discussion)) {
      return comment
    }

    if (comment.comments) {
      comment.comments.forEach(c => queue.push(c))
    }
  }
}

const discussion = (state = {
  isFetching: false,
  discussion: null,
  lastUpdated: 0,
  user_id: 4
}, action) => {
  switch (action.type) {
    case RESET_STATE:
      return Object.assign({}, state, {
        isFetching: false,
        discussion: null,
        lastUpdated: 0,
        user_id: 4,
      })
    case REQUEST_DISCUSSION:
      return Object.assign({}, state, {
        isFetching: true,
        id: action.id
      })
    case RECEIVE_DISCUSSION:
      return Object.assign({}, state, {
        isFetching: false,
        discussion: action.discussion,
        receivedAt: action.receivedAt
      })
    case EDIT_COMMENT:
      if (state.discussion) {
        var clonedDisc = Object.assign({}, state.discussion)
        changeText(findComment([clonedDisc], action.id), action.text)
      } else {
        return new ReferenceError('discussion not loaded')
      }

      return Object.assign({}, state, {
        discussion: clonedDisc
      })
    case DELETE_COMMENT:
      if (state.discussion) {
        var clonedDisc = Object.assign({}, state.discussion)
        deleteComment(findComment([clonedDisc], action.id))
      } else {
        return new ReferenceError('discussion not loaded')
      }

      return Object.assign({}, state, {
        discussion: clonedDisc
      })
    case TOGGLE_COMMENTS:
      if (state.discussion) {
        var clonedDisc = Object.assign({}, state.discussion)
        toggleCommentVisibility(findComment([clonedDisc], action.id))
      } else {
        return new ReferenceError('discussion not loaded')
      }

      return Object.assign({}, state, {
        discussion: clonedDisc
      })
    default:
      return state
  }
}

export default discussion
