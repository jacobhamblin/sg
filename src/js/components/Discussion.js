import React, { Component } from 'react'
import { fetchDiscussion } from '../actions'
import { connect } from 'react-redux'
import { Comment } from '../components'

class Discussion extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchDiscussion(1))
  }

  render() {
    const { discussion } = this.props
    let starter
    if (discussion) {
      starter = <Comment
        author={discussion.author}
        author_id={discussion.author_id}
        datetime={discussion.datetime}
        id={discussion.id}
        title={discussion.title}
        className={'comment starter'}
      />
    }


    return (
      <div>
        {starter}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { discussion } = state
  return {
    discussion
  }
}

export default connect(mapStateToProps)(Discussion)
