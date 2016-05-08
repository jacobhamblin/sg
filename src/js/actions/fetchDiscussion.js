require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

function addVisibilityState(comment) {
  comment.hide_children = false

  if (comment.comments) comment.comments.map(addVisibilityState)
}

export const RESET_STATE = 'RESET_STATE'
function resetState() {
  return {
    type: RESET_STATE
  }
}

export const REQUEST_DISCUSSION = 'REQUEST_DISCUSSION'
function requestDiscussion(id) {
  return {
    type: REQUEST_DISCUSSION,
    id
  }
}

export const RECEIVE_DISCUSSION = 'RECEIVE_DISCUSSION'
function receiveDiscussion(json) {
  addVisibilityState(json.discussion)

  return {
    type: RECEIVE_DISCUSSION,
    discussion: json.discussion,
    receivedAt: Date.now()
  }
}

export function fetchDiscussion(id) {
  return function (dispatch) {
    dispatch(resetState())
    dispatch(requestDiscussion(id))

    return fetch(`./json/${id}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveDiscussion(json)))
  }
}
