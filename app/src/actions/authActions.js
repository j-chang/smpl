export const AUTHENTICATING_USER = 'AUTHENTICATING_USER'
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED'

const authenticatingUser = () => (
  {
    type: AUTHENTICATING_USER,
    isAuthenticating: true
  }
)

const userAuthenticated = (user) => (
  {
    type: USER_AUTHENTICATED,
    user,
    isAuthenticating: false
  }
)

export const authenticateUser = () => {
  const config = {method: 'GET'}

  return (dispatch) => {
    dispatch(authenticatingUser())
    return fetch('https://randomuser.me/api/?results=10&nat=us', config)
      .then(response => response.json())
      .then((responseJSON) => {
        dispatch(userAuthenticated(responseJSON))
      })
      .catch(error => console.error(error))
  }
}