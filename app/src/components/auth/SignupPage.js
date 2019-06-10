import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: null,
      createdUser: null
    }

    this.onSignupSubmit = this.onSignupSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
  }

  onSignupSubmit(e) {
    e.preventDefault()
    const {email, password, passwordConfirmation} = this.state
    if (email === '' || password === '' || passwordConfirmation === '') return this.setState({error: 'All fields are required'})
    if (!email.includes('@') || !email.includes('.')) return this.setState({error: 'Email must be valid'})
    if (password.length < 6) return this.setState({error: 'Password must be at least 6 characters'})
    if (password !== passwordConfirmation) return this.setState({error: 'Passwords must match'})

    const config = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password
      })
    }

    fetch('http://localhost:4000/api/v1/accounts/new', config)
      .then(response => response.ok ? response : Promise.reject(response.statusText))
      .then(response => response.json())
      .then((responseJSON) => this.setState({createdUser: responseJSON.data}))
      .catch(error => this.setState({ error: 'Email already taken. Contact help@smpldata.com for assistance' }))
  }

  handleKeyDown(e) {
    if (e.keyCode !== 13) return
    this.onSignupSubmit(e)
  }

  renderSuccessPage() {
    return <div className='SuccessPage'>
      <div className='SuccessPage-title'>Success!</div>
      <div className='SuccessPage-success-message'>We're in Beta. Take a look around. Any feedback is appreciated!</div>
      <div className='SuccessPage-success-message'>info@smpldata.com</div>
      <div className='SuccessPage-success-message'>Try logging in with your account!</div>
      <NavLink to='/login' className='GotoLoginButton'>Login Screen</NavLink>
    </div>
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

        {this.state.createdUser ? this.renderSuccessPage() :
          <div className='SignupPage'>
            {this.state.error &&
              <div className='SignupPage-error'>{this.state.error}</div>
            }

            <form className='SignupPage-form' onSubmit={this.onSignupSubmit}>
              <div className='SignupPage-form-label'>Email</div>
              <input
                className='SignupPage-form-input'
                autoFocus
                placeholder='Email'
                type='email'
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
              />

              <div className='SignupPage-form-label'>Password</div>
              <input
                className='SignupPage-form-input'
                placeholder='Password'
                type='password'
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
              />

              <div className='SignupPage-form-label'>Confirm Password</div>
              <input
                className='SignupPage-form-input'
                placeholder='Password'
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
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(SignupPage)