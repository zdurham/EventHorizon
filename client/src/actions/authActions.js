import { setCookie, removeCookie } from '../utils/cookies'
import authRequests from '../utils/api/authRequests'

// ACTION HANDLERS
// authenticates the user. Used for both register and login
function authUserAction(data) {
	return {
		type: 'AUTH_USER',
		payload: data
	}
}

function removeAuthUserAction() {
  return {
    type: 'REMOVE_AUTH',
    payload: {}
  }
}

/// ------------------------------------
// ACTIONS

// Registration Action
export function registerUser(userData) {
  return dispatch => {
    // Using an axios post request function from the utils folder 
    authRequests.register(userData)
    .then(res => {
      // set a cookie in the browser for storage
      setCookie('user', res.data)
      dispatch(authUserAction(res.data))
    })
  }
}

// Login Action
export function loginUser(userData) {
  return dispatch => {
    // Using an axios post request function from the utils folder
    authRequests.login(userData)
    .then(res => {
      // set a cookie in the browser for storage
      setCookie('user', res.data)
      dispatch(authUserAction(res.data))
    }) 
  }
}

// Logout Action
export function logoutUser() {
  return dispatch => {
    authRequests.logout()
    .then(res => {
      removeCookie('user')
      dispatch(removeAuthUserAction())
    })
  }
  
}
///