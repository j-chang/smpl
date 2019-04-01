import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLocation } from '../../actions/navActions'

class AccountSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  changeLocation(main='account', sub='') {
    this.props.dispatch(changeLocation(main, sub))
  }

  render() {
    const { main, sub } = this.props.nav
    return (
      <ul id='sidebar-account' className='Sidebar'>
        <li className='SidebarLink SidebarLink-main' onClick={() => this.changeLocation('account')}>
          <a className={main === 'account' && sub === '' ? 'is-active' : ''} href='#'>Account Settings</a>
        </li>

        <li className={'SidebarLink' + (sub === 'aws-account' ? ' is-active' : '')} onClick={() => this.changeLocation('account', 'aws-account')}><a href='#'>AWS Account</a></li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(AccountSidebar)