import React from "react";
import './LogInForm.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class LogInForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    })
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label for="email">Email</Label>{' '}
            <Input 
            type="text" 
            name="email" 
            id="email" 
            placeholder="Cool Kid" 
            value={this.state.email}
            onChange={this.handleChange}
            />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="password">Password</Label>{' '}
            <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Top Secret" 
            value={this.state.password}
            onChange={this.handleChange}
            />
          </FormGroup>
          {' '}
          <Button id="submitBtn" value="log-in" block>Log In</Button>
      </Form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  loginUser() {
    dispatch(loginUser())
  }
})

export default connect(null,  { loginUser } )(LogInForm);
