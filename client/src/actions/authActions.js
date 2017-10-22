import { getStorage } from '../utils/localStorage'
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

function getUser(data) {
  return {
    type: 'GET_USER',
    payload: data
  }
}

/// ------------------------------------
// ACTIONS

// Registration Action
export const registerUser = (userData) => {
  return dispatch => {
    // Using an axios post request function from the utils folder
    authRequests.register(userData)
    .then(res => {
      // set data in localStorage
      localStorage.setItem('user', JSON.stringify(res.data))
      dispatch(authUserAction(res.data))
    })
  }
}

// Login Action
export const loginUser = (userData) => {
  return dispatch => {
    // Using an axios post request function from the utils folder
    authRequests.login(userData)
    .then(res => {
      // data in localStorage
      localStorage.setItem('user', JSON.stringify(res.data))
      dispatch(authUserAction(res.data))
    })
  }
}

// Logout Action
export const logoutUser = () => {
  return dispatch => {
    authRequests.logout()
    .then(res => {
      localStorage.removeItem('user')
      dispatch(removeAuthUserAction())
    })
  }
}

// Get User Action
export const getAuthUser = () => {
  return dispatch => {
    let user = JSON.parse(getStorage('user'))
    dispatch(getUser(user))
  }
  // try {
  //   const response = await get(dispatch, GET_AUTHENTICATED_USER, `${AUTH_ENDPOINT_BASE}/profile`, true);
  //   return Promise.resolve(response);
  // } catch (err) {
  //   await handleError(dispatch, err, GET_AUTHENTICATED_USER);
  // }
};
///
