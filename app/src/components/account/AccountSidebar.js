import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
        <Link to='/' className='LogoContainer' onClick={() => this.changeLocation('home')}>
          <img id='logo' src='./assets/brand.svg' alt='smpldata'/>
        </Link>

        <li className='SidebarLink' onClick={() => this.changeLocation('data')}><Link to='/data'>Data</Link></li>
        <li className='SidebarLink' onClick={() => this.changeLocation('notebooks')}><Link to='/notebooks'>Notebooks</Link></li>
        <li className='SidebarLink' onClick={() => this.changeLocation('clusters')}><Link to='/clusters'>Clusters</Link></li>

        {false &&
          <div className='Sidebar-sub'>
            <li className={'SidebarLink' + (sub === 'aws-account' ? ' is-active' : '')} onClick={() => this.changeLocation('account', 'aws-account')}><a href='#'>AWS Account</a></li>
          </div>
        }

        <li className='SidebarLink SidebarLink-account is-active' onClick={() => this.changeLocation('account')}><Link to='/clusters'>Account</Link></li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(AccountSidebar)