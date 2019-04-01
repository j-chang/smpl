import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import rootReducer from './reducers/rootReducer.js'
import App from './components/App'
import './styles/main.styl'

const logger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/data" component={App} />
        <Route path="/notebooks" component={App} />
        <Route path="/clusters" component={App} />
        <Route path="/account" component={App} />
      </React.Fragment>
    </Router>
  </Provider>,

  document.getElementById('root')
)