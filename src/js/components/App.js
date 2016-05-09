import React, { Component } from 'react'
import '../../scss/main.scss'
require('es6-object-assign').polyfill();

const App = ({children}) => {
  return (
    <div className="app">
      {children}
    </div>
  )
}

export default App
