import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticateUser } from '../actions/authActions'
import Header from './header/Header'
import DataPage from './data/DataPage'
import NotebooksPage from './notebooks/NotebooksPage'
import ClustersPage from './clusters/ClustersPage'
import AccountPage from './account/AccountPage'
import HomePage from './home/HomePage'
import LandingPage from './auth/LandingPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // this.props.dispatch(authenticateUser())
  }

  render() {
    const { nav } = this.props
    let loggedIn = true
    loggedIn = false

    if (!loggedIn) {
      return <LandingPage />
    }

    return (
      <div id='app'>
        <Header />
        <div id='wrap'>
          <div id='wrap-inner'>
            {nav.main === 'home' && <HomePage />}
            {nav.main === 'data' && <DataPage />}
            {nav.main === 'notebooks' && <NotebooksPage />}
            {nav.main === 'clusters' && <ClustersPage />}
            {nav.main === 'account' && <AccountPage />}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App)