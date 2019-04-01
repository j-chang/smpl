import { CHANGE_LOCATION } from '../actions/navActions'

const initialState = {
  main: 'home',
  sub: ''
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        main: action.main,
        sub: action.sub
      }
    default:
      return state
  }
}

export default navReducer