import axios from 'axios'
import { setCookie } from '../utils/cookies'

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
    console.log('in registerUser')
    axios.post('http://localhost:3030/register', userData)
    .then(res => {
      setCookie('user', res.data)
      dispatch(getUser(res.data))
    })
    // dispatch(getUser({
    //     name: 'zach durham',
    //     username: 'zdurham',
    //     email: 'zdurham101@gmail.com'
    // }))
  }
}