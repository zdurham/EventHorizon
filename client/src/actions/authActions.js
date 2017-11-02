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

function logError(data) {
  return {
    type: 'LOG_ERROR',
    payload: data
  }
}

function regError(data) {
  return {
    type: 'REG_ERROR',
    payload: data
  }
}

function removeErr() {
  return {
    type: 'REMOVE_ERROR'
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
        dispatch(regError(res.data.error))
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
        dispatch(logError(res.data.error))
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

export const toggleErr = () => {
  return dispatch => {
    dispatch(removeErr())
  }
}

// code below may not be needed with redux-persist npm package

// Get User Action
export const getAuthUser = () => {
  return dispatch => {
    
  }

};
///
