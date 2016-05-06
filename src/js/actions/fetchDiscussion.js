require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export const REQUEST_DISCUSSION = 'REQUEST_DISCUSSION'
function requestDiscussion(id) {
  return {
    type: REQUEST_DISCUSSION,
    id
  }
}

export const RECEIVE_DISCUSSION = 'RECEIVE_DISCUSSION'
function receiveDiscussion(json) {
  return {
    type: RECEIVE_DISCUSSION,
    discussion: json.discussion,
    receivedAt: Date.now()
  }
}

export function fetchDiscussion(id) {
  return function (dispatch) {
    dispatch(requestDiscussion(id))

    return fetch(`../../json/${id}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveDiscussion(json)))
  }
}
