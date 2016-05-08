import React, { Component } from 'react'
import { toggleComments } from '../actions'
import '../../scss/toggleComments.scss'

class ToggleComments extends Component {
  constructor(props) {
    super(props)
    this.clicked = this.clicked.bind(this)
    this.state = {
      show: true
    }
  }

  clicked(e) {
    const { dispatch, id } = this.props
    dispatch(toggleComments(id))
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const { show } = this.state
    let className = 'toggle'
    if (show) className += ' show'

    return (
      <div className={className} onClick={this.clicked} />
    )
  }
}

export default ToggleComments
