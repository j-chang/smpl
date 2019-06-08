import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeLocation } from '../../actions/navActions'
import { signOutUser } from '../../actions/authActions'

class AccountMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.onSignOut = this.onSignOut.bind(this)
  }

  componentDidMount() {
  }

  changeLocation(main='home', sub='') {
    this.props.dispatch(changeLocation(main, sub))
  }

  onSignOut() {
    this.props.dispatch(signOutUser())
    this.changeLocation('home')
  }

  render() {
    return (
      <div className='AccountMain Content-with-sidebar'>
        <div className='ContentName'>Account Settings</div>
        <div className='ContentName-bottom-border'></div>

        <div className='AccountInfo'>
          <div className='AccountInfo-title'>Account Info</div>
          <div className='AccountInfo-email'>{'Demo Mode (0.0.6)'}</div>
        </div>

        <Link to='/' className='LogoutButton' onClick={() => this.onSignOut()}>Log out</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(AccountMain)