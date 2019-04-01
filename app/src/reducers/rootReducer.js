import { combineReducers } from 'redux'
import auth from './authReducer'
import nav from './navReducer'

const rootReducer = combineReducers({
  auth,
  nav
})

export default rootReducer