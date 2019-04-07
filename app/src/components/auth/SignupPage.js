import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  componentDidMount() {
  }

  onSignupSubmit(e) {
    console.log('signup')
    e.preventDefault()
  }

  handleKeyDown(e) {
    if (e.keyCode !== 13) return
    this.onSignupSubmit(e)
  }

  render() {
    return (
      <div id='signup-page'>

        <ul className='Header LandingPage-header'>
          <NavLink to='/' className='LogoContainer'>
            <img id='logo' src='./assets/brand.svg' alt='smpldata'/>
          </NavLink>
        </ul>

        <div className='SignupPage-title'>Sign up</div>

        <div className='SignupPage'>
          <form className='SignupPage-form' onSubmit={this.onLoginSubmit}>
            <div className='SignupPage-form-label'>Email</div>
            <input
              className='SignupPage-form-input'
              autoFocus
              // placeholder='Email'
              type='email'
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}
            />

            <div className='SignupPage-form-label'>Password</div>
            <input
              className='SignupPage-form-input'
              // placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}
            />

            <div className='SignupPage-form-label'>Confirm Password</div>
            <input
              className='SignupPage-form-input'
              // placeholder='Password'
              type='password'
              value={this.state.passwordConfirmation}
              onChange={(e) => this.setState({passwordConfirmation: e.target.value})}
            />

            <div className='SignupButton' tabIndex='0' onClick={this.onSignupSubmit} onKeyDown={this.handleKeyDown}>
              Sign up
              <input type='submit'/>
            </div>
          </form>

          <NavLink to='/login' className='SignupPage-login'>
            Already have an account?
          </NavLink>

        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(SignupPage)