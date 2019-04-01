import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeSidebar from './HomeSidebar'
import HomeMain from './HomeMain'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { sub } = this.props.nav
    return (
      <div id='home-page'>
        <HomeSidebar />
        {sub === '' && <HomeMain />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(HomePage)