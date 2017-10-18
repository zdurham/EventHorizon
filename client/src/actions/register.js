import axios from 'axios'
import { setCookie } from '../utils/cookies'
import authRequests from '../api/authAPI'

// action handlers
function getUser(data) {
	return {
		type: 'GET_USER',
		payload: data
	}
}


// actions to be exported to components
export function registerUser(userData) {
  return dispatch => {
    
    authRequests.register(userData)
    .then(res => {
      setCookie('user', res.data)
      dispatch(getUser(res.data))
    })
  }
}

export function loginUser(userData) {
  
}