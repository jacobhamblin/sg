import React, { Component } from 'react'

const Starter = ({author, author_id, datetime, id, title}) => {
  return (
    <div>
      <ul>
        <li>{author}</li>
        <li>{author_id}</li>
        <li>{datetime}</li>
        <li>{id}</li>
        <li>{title}</li>
      </ul>
    </div>
  )
}

export default Starter
