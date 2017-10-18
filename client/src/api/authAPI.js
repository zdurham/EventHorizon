import axios from 'axios'

const authRequests = {
  register(data) {
    return axios.post('/register', data)
  }
}

export default authRequests