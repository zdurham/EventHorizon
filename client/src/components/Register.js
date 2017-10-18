import React from 'react'
import { registerUser } from '../actions/authActions'
import { connect } from 'react-redux'
class Register extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      email: '',
      password: '',
      confPassword: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.registerUser(this.state)
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.onChange}
          />
        <label htmlFor='email'>email</label>
        <input
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.onChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.onChange}
          />
        <label htmlFor='confPassword'>Password</label>
        <input
          type='text'
          name='confPassword'
          value={this.state.confPassword}
          onChange={this.onChange}
          />
        <button>Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser() {
    dispatch(registerUser())
  }
})

export default connect(null, { registerUser })(Register);