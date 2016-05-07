import React from 'react'
import ReactDOM from 'react-dom'
import { App, Discussion } from './components'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Discussion/>
    </App>
  </Provider>,
  document.getElementById('root')
);
