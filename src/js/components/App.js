import React, { Component } from 'react'
import '../../scss/main.scss'

const App = ({children}) => {
  return (
    <div className="app">
      {children}
    </div>
  )
}

export default App
