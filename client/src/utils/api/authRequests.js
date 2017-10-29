import axios from 'axios'

const authRequests = {
  // Registration request
  register(data) {
    return axios.post('/register', data)
  },

  // Login request
  login(data) {
    return axios.post('/login', data)
  },

  // Logout request
  logout(data) {
    return axios.post('/logout', data)
  },

  getUser(data) {
    return axios.post('/user', data)
  }
}

export default authRequests