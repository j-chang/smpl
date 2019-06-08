import Cookies from 'universal-cookie'

export const AUTHENTICATING_USER = 'AUTHENTICATING_USER'
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS'
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE'
export const SIGN_OUT = 'SIGN_OUT'

const authenticatingUser = () => (
  {
    type: AUTHENTICATING_USER,
    isAuthenticating: true
  }
)

const authenticationSuccess = (data) => {
  setAuthToken(data.token)
  return {
    type: AUTHENTICATION_SUCCESS,
    user: data.user_id,
    isAuthenticating: false
  }
}

const authenticationFailure = (loginError) => (
  {
    type: AUTHENTICATION_FAILURE,
    user: null,
    isAuthenticating: false,
    error: loginError
  }
)

export const authenticateUser = (email, password) => {
  const config = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email,
      password
    })
  }

  return (dispatch) => {
    dispatch(authenticatingUser())
    return fetch('http://localhost:4000/sessions/login', config)
      .then(response => response.ok ? response : Promise.reject(response.statusText))
      .then(response => response.json())
      .then((responseJSON) => dispatch(authenticationSuccess(responseJSON.data)))
      .catch(error => dispatch(authenticationFailure(error)))
  }
}

const signOut = (data) => {
  removeAuthToken()
  return {
    type: SIGN_OUT,
    user: null
  }
}

export const signOutUser = () => {
  const config = {
    method: 'DELETE',
    headers: {'Authorization': `Bearer ${getAuthToken()}`,'Content-Type': 'application/json'}
  }

  return (dispatch) => {
    dispatch(signOut())
    return fetch('http://localhost:4000/sessions/sign_out', config)
      .then(response => response.ok ? response : Promise.reject(response.statusText))
      .catch(error => console.log(error))
  }
}

const setAuthToken = (token) => {
    const cookies = new Cookies()
    cookies.set('smpl_auth', token, {path: '/'})
}

const removeAuthToken = () => {
    const cookies = new Cookies()
    cookies.remove('smpl_auth', {path: '/'})
}

export const getAuthToken = () => {
    const cookies = new Cookies()
    return cookies.get('smpl_auth')
}