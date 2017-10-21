import React, { Component } from "react";
import { connect } from 'react-redux'
import './SignUpForm.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
{/*import { registerUser } from '../actions/authActions'*/}

class SignUpForm extends React.Component {
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
  <div>
    <Form onSubmit={this.onSubmit}>
      <FormGroup>
        <Label for="username" hidden>Username</Label>{' '}
        <Input 
        type="text" 
        name="username" 
        id="username" 
        placeholder="Username" 
        value={this.state.username}
        onChange={this.onChange}
        />
      </FormGroup>
    <FormGroup>
      <Label for="email" hidden>Email</Label>
      <Input 
      type="email" 
      name="email" 
      id="email" 
      placeholder="Email" 
      value={this.state.email}
      onChange={this.onChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="password" hidden>Password</Label>
      <Input 
      type="password" 
      name="password" 
      id="password" 
      placeholder="Password" 
      value={this.state.password}
      onChange={this.onChange} 
      />
    </FormGroup>
    <FormGroup>
      <Label for="confirmPassword" hidden>Confirm Password</Label>
      <Input 
      type="password" 
      name="confirmPassword" 
      id="confirmPassword" 
      placeholder="Confirm Password"  
      value={this.state.confPassword}
      onChange={this.onChange}      
      />
    </FormGroup>
    <FormGroup>
      <Label for="userInterest">Which event would interest you most?</Label>
      <Input type="select" name="userInterest" id="userInterest">
        <option>Sports</option>
        <option>Gaming</option>
        <option>Festivals</option>
        <option>Movies</option>
        <option>Tech</option>
      </Input>
    </FormGroup>
    <Button id="joinBtn" block>Join</Button>
  </Form>
</div>
    );
  }
}
export default SignUpForm;

/*const mapDispatchToProps = dispatch => ({
  registerUser() {
    dispatch(registerUser())
  }
})

export default connect(null, { registerUser })(Register);*/
