import React, { Component } from 'react'
import '../../scss/timestamp.scss'

function javascriptDate(timestamp) {
  return new Date((timestamp || "").replace(/-/g,"/").replace(/[TZ]/g," "))
}

function agoString(date) {
  let str = ''
  let milliseconds = Date.now() - Date.parse(date)
  let seconds = parseInt(milliseconds / 1000)
  let minutes = parseInt(seconds / 60)
  let hours = parseInt(minutes / 60)
  let days = parseInt(hours / 24)
  let years = parseInt(days / 365)

  if (years) {
    str = `${years} year`
    if (years > 1) str += 's'
    if (days % 360) str += ` ${days % 360} days ago`
  } else if (days) {
    str = `${days} day`
    if (days > 1) str += 's'
    str += ' ago'
  } else if (hours) {
    str = `${hours} hour`
    if (hours > 1) str += 's'
    if (minutes % 60) str += ` ${minutes % 60} minutes ago`
  } else if (minutes) {
    if (minutes > 5) {
      str = `${minutes} minutes ago`
    } else {
      str = `just now`
    }
  }

  return str
}

class Timestamp extends Component {
  constructor(props) {
    super(props)
    this.enter = this.enter.bind(this)
    this.leave = this.leave.bind(this)
    this.state = {
      hovered: false,

    }
  }

  enter() {
    const comp = this
    this.setState({
      hovered: true
    })

    setTimeout((comp) => {
      if (this.state.hovered) {
        this.setState({
          active: true
        })
      }
    }, 500)
  }

  leave() {
    this.setState({
      hovered: false,
      active: false
    })
  }

  render() {
    const { timestamp } = this.props
    const { hovered, active } = this.state
    let hover = ''
    if (active) hover += ' active'

    return (
      <div className={'timestamp'} onMouseEnter={this.enter} onMouseLeave={this.leave}>
        <span className={'ago' + hover}>
          {agoString(javascriptDate(timestamp))}
        </span>
        <br/>
        <span className={'date' + hover}>
          {javascriptDate(timestamp).toString()}
        </span>
      </div>
    )
  }
}

export default Timestamp
