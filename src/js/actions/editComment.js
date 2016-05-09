export const EDIT_COMMENT = 'EDIT_COMMENT'
export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
}
