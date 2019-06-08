import { AUTHENTICATING_USER, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE, SIGN_OUT } from '../actions/authActions'

const initialState = {
  user: null,
  isAuthenticating: false,
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATING_USER:
      return {
        ...state,
        isAuthenticating: true,
        error: null
      }
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticating: false,
        error: null
      }
    case AUTHENTICATION_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticating: false,
        error: action.error
      }
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        isAuthenticating: false,
        error: null
      }
    default:
      return state
  }
}

export default authReducer