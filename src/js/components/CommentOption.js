import React, { Component } from 'react'
import '../../scss/commentOption.scss'

const CommentOption = ({className, clickFunction}) => {
  let option = <div className={className}/>
  if (className === 'remove') {
    option = <div className={className}><div className="line"/><div className="line"/></div>
  }

  return (
    <div className='option' onClick={clickFunction}>
      {option}
    </div>
  )
}

export default CommentOption
