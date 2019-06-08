import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuthToken } from '../actions/authActions'
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
  }

  render() {
    const { nav, auth } = this.props
    const hasToken = getAuthToken()

    if (!auth.user && !hasToken) {
      return <LandingPage />
    }

    return (
      <div id='app'>
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