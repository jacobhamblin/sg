export const DELETE_COMMENT = 'DELETE_COMMENT'
export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}
