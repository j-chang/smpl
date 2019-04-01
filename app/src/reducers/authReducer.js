import { AUTHENTICATING_USER, USER_AUTHENTICATED } from '../actions/authActions'

const initialState = {
  user: null,
  isAuthenticating: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATING_USER:
      return {
        ...state,
        isAuthenticating: true
      }
    case USER_AUTHENTICATED:
      return {
        ...state,
        user: action.user,
        isAuthenticating: false
      }
    default:
      return state
  }
}

export default authReducer