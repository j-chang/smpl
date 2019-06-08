import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { sub } = this.props.nav
    return (
      <div id='landing-page' style={{background: 'url(./assets/landing.png) no-repeat right bottom', backgroundSize: '40%'}}>

        <ul className='Header LandingPage-header'>
          <div className='LogoContainer'>
            <img id='logo' src='./assets/brand.svg' alt='smpldata'/>
          </div>
          <li className='LandingPage-header-login'>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li className='LandingPage-header-signup'>
            <NavLink to='/signup'>Sign Up</NavLink>
          </li>
        </ul>

        <div className='LandingPage-content'>
          <h1>make big data smpl</h1>
          <div className='LandingPage-content-border'></div>
          <div className='LandingPage-content-text'>
            Easily run Python commands and SQL queries through your browser. Simply upload your data or connect to a database. Allocate cloud resources with a click of a button.
          </div>

          <div className='LandingPage-content-signup'>
            <NavLink to='/signup'>Sign Up for Beta</NavLink>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(LandingPage)