import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { changeLocation } from '../../actions/navActions'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  changeLocation(main='home', sub='') {
    this.props.dispatch(changeLocation(main, sub))
  }

  render() {
    const activeStyle = {color: '#2C61DC'}

    return (
      <ul className='Header'>
        <NavLink to='/' className='LogoContainer' onClick={() => this.changeLocation()}>
          <img id='logo' src='./assets/brand.svg' alt='smpldata'/>
        </NavLink>

        <li className='HeaderLink'>
          <NavLink activeStyle={activeStyle} to='/data' onClick={() => this.changeLocation('data')}>Data</NavLink>
          <ul className='subnav'>
            <li className='subnav-item'>
              <NavLink to='/data' onClick={() => this.changeLocation('data')}>Upload File</NavLink>
            </li>
            <li className='subnav-item'>
              <NavLink to='/data' onClick={() => this.changeLocation('data', 'connect-database')}>Connect Database</NavLink>
            </li>
          </ul>
        </li>

        <li className='HeaderLink'>
          <NavLink activeStyle={activeStyle} to='/notebooks' onClick={() => this.changeLocation('notebooks')}>Notebooks</NavLink>
          <ul className='subnav'>
            <li className='subnav-item'>
              <NavLink to='/notebooks' onClick={() => this.changeLocation('notebooks', 'new-notebook')}>New Notebook</NavLink>
            </li>
          </ul>
        </li>

        <li className='HeaderLink'>
          <NavLink activeStyle={activeStyle} to='/clusters' onClick={() => this.changeLocation('clusters')}>Clusters</NavLink>
          <ul className='subnav'>
            <li className='subnav-item'>
              <NavLink to='/clusters' onClick={() => this.changeLocation('clusters', 'new-cluster')}>New Cluster</NavLink>
            </li>
          </ul>
        </li>

        <li className='HeaderLink HeaderLink-account'>
          <NavLink to='/account' onClick={() => this.changeLocation('account')}>Account</NavLink>
          <ul className='subnav'>
            <li className='subnav-item'>
              <NavLink to='/account' onClick={() => this.changeLocation('account')}>Account Settings</NavLink>
            </li>
            <li className='subnav-item'>
              <NavLink to='/'>Sign Out</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps)(Header))