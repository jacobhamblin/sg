import { RESET_STATE, REQUEST_DISCUSSION, RECEIVE_DISCUSSION, fetchDiscussion } from '../actions/fetchDiscussion'

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
    default:
      return state
  }
}

export default discussion
