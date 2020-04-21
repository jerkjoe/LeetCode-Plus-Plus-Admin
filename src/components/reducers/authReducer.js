import { 
  USER_LOADED, 
  USER_LOADING, 
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from '../actions/types'

const initialState = {
  token : localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading : false,
  user: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { 
        ...state,
        isLoading: true
      }
    case USER_LOADED :{
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      }
    }
    case LOGOUT_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token' , actions.payload.token)
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true,
        } 
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
        isAuthenticated : false
      }
    default:
      return state
  }
}
