import {
  RESET_STATE, REQUEST_DISCUSSION, RECEIVE_DISCUSSION, TOGGLE_COMMENTS
} from '../actions'


function toggleCommentVisibility(comment) {
  comment.hide_children = !comment.hide_children
}

function findComment(queue, id) {
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
    case TOGGLE_COMMENTS:
      if (state.discussion) {
        var clonedDisc = Object.assign({}, state.discussion)
        toggleCommentVisibility(findComment([clonedDisc], action.id))
      }

      return Object.assign({}, state, {
        discussion: clonedDisc
      })
    default:
      return state
  }
}

export default discussion
