export const TOGGLE_COMMENTS = 'TOGGLE_COMMENTS'
export function toggleComments(id) {
  return {
    type: TOGGLE_COMMENTS,
    id
  }
}
