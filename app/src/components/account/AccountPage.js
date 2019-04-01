import React, { Component } from 'react'
import { connect } from 'react-redux'
import AccountSidebar from './AccountSidebar'
import AccountMain from './AccountMain'

class AccountPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { sub } = this.props.nav
    return (
      <div id='account-page'>
        <AccountSidebar />
        {sub === '' && <AccountMain />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(AccountPage)