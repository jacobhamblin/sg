import { assert } from 'chai'
import { findComment } from '../reducers'
import { addVisibilityState } from '../actions'
import json from '../../json/1.json'

describe('Actions', () => {
  describe('findComment()', () => {
    it('should return the matching comment', () => {
      assert.equal(1, findComment([json.discussion], 1).id)
    })
    it('should not return the thread start when looking for comment #1', () => {
      assert.notEqual("Camille", findComment([json.discussion], 1).author)
    })
  })

  describe('addVisibilityState()', () => {
    it('should add visibility state of children to each comment', () => {
      var clonedDisc = Object.assign({}, json.discussion)
      addVisibilityState(clonedDisc)

      assert.equal(false, clonedDisc.comments[3].hide_children)
    })
  })
})
