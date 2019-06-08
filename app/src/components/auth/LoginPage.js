import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { authenticateUser } from '../../actions/authActions'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.onLoginSubmit = this.onLoginSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
  }

  onLoginSubmit(e) {
    e.preventDefault()
    if (this.state.email === '' || this.state.password === '') return
    this.props.dispatch(authenticateUser(this.state.email, this.state.password))
  }

  handleKeyDown(e) {
    if (e.keyCode !== 13) return
    this.onLoginSubmit(e)
  }

  render() {
    const { auth } = this.props

    if (auth.user) {
      return <Redirect to='/' />
    }

    return (
      <div id='login-page'>

        <ul className='Header LandingPage-header'>
          <NavLink to='/' className='LogoContainer'>
            <img id='logo' src='./assets/brand.svg' alt='smpldata'/>
          </NavLink>
        </ul>

        <div className='LoginPage-title'>Log in</div>

        <div className='LoginPage'>
          {this.props.auth.error &&
            <div className='LoginPage-error'>Invalid email or password</div>
          }

          <form className='LoginPage-form' onSubmit={this.onLoginSubmit}>
            <div className='LoginPage-form-label'>Email</div>
            <input
              className='LoginPage-form-input'
              autoFocus
              placeholder='Email'
              type='email'
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}
            />

            <div className='LoginPage-form-label'>Password</div>
            <input
              className='LoginPage-form-input'
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}
            />

            <div className='LoginButton' tabIndex='0' onClick={this.onLoginSubmit} onKeyDown={this.handleKeyDown}>
              Log in
              <input type='submit'/>
            </div>
          </form>

          <NavLink to='/' className='LoginPage-forgot-password'>
            Forgot your password?
          </NavLink>

          <div className='LoginPage-signup'>
            Don't have an account? <NavLink to='/signup'>Sign Up for free</NavLink>
          </div>

        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(LoginPage)