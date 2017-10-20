import React from 'react'
import { loginUser } from '../actions/authActions'
import { connect } from 'react-redux' 
import { BrowserRouter as Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    })
  }

  dash = () => {
    return this.props.history.push('/dashboard');
  } 
  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            value={this.state.email}
            onChange={this.onChange}
            type='text'
          />
          <label htmlFor='password'>Password</label>
          <input 
            name='password'
            value={this.state.password}
            onChange={this.onChange}
            type='password'
          />
          <button>Login
          </button>
        </form>
        <button onClick={this.dash} >Dashboard</button>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  loginUser() {
    dispatch(loginUser())
  }
})

export default connect(null, { loginUser })(Login)