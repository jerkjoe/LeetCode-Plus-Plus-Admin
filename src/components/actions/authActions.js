import axios from 'axois'
import {returnErrors} from './errorActions'
import { 
  USER_LOADED, 
  USER_LOADING, 
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from './types'


// check token and load user
export const loadUser  = () => (dispatch,getState) =>{
  //user loading
  dispatch ({
    type: USER_LOADING
  })
  const token = getState().auth.token
  if (token) {
    const config = {
      headers: {
        "Content-type" : 'application/json',
        'x-auth-token' : token
      }
    }
    axios.get('/https://leetcode-plus-plus-backend.netlify.com/.netlify/functions/login', config)
    .then(res => dispatch ({
      type: USER_LOADED,
      payload : res.data
    }))
    .catch (err => {
      dispatch(returnError(error.repsonse.data, err.response.status) )
      dispatch ({
        type: AUTH_ERROR
      })
    })
  }
}
export const register = ({name, email, password}) => dispatch => {
  const config = {
    header: {
      "Content-type" : 'application/json',
    }
  }
  const body = json.stringify({name,email,password})
  axios.post('https://leetcode-plus-plus-backend.netlify.com/.netlify/functions/register' , body , config)
  .then(res => dispatch ({
    type: REGISTER_SUCCESS,
    payload: res.data
  }))
  .catch( err =>{
    dispatch(returnError(error.repsonse.data, err.response.status) )
    dispatch({
      type: REGISTER_FAIL
    })
  })
} 