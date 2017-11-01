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
    type: 'USER_LOGOUT',
    payload: {}
  }
}

function getUser(data) {
  return {
    type: 'GET_USER',
    payload: data
  }
}

function authError(data) {
  return {
    type: 'AUTH_ERROR',
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
      if (res.data.error) {
        dispatch(authError(res.data.error))
      }
      else {
        dispatch(authUserAction(res.data))  
      }
      
    })
  }
}

// Login Action
export const loginUser = (userData) => {
  return dispatch => {
    // Using an axios post request function from the utils folder
    authRequests.login(userData)
    .then(res => {
      if (res.data.error) {
        dispatch(authError(res.data.error))
      }
      else {
        dispatch(authUserAction(res.data))
      }
      // console.log('response data', res.data)
      

    })
  }
}

// Logout Action
export const logoutUser = () => {
  return dispatch => {
    authRequests.logout()
    .then(res => {
      dispatch(removeAuthUserAction())
    })
  }
}

// code below may not be needed with redux-persist npm package

// Get User Action
export const getAuthUser = () => {
  return dispatch => {

  }

};
///
