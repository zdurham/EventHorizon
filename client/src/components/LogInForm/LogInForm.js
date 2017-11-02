import React, { Component } from "react";
import './LogInForm.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { loginUser } from '../../actions/authActions';

class LogInForm extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      email: '',
      password: ''
    }
  }

  handleValidSubmit = (event, values) =>{
    event.preventDefault()
    this.setState({values});
    this.props.loginUser({
      email: this.state.values.email,
      password: this.state.values.password
    })
    
    if (this.props.isAuth) {
      this.props.toggle()    
    }
    else {
      return
    }
  }

  render() {
    return (
      <AvForm id="login-form" onValidSubmit={this.handleValidSubmit}>
      {this.props.error && <p className='error' >{this.props.error}</p>}
        <AvGroup>
          <Label for="login-email">Email</Label>
          <AvInput
            type="email"
            name="email"
            id="login-email"
            required />
          <AvFeedback>Enter a valid email address</AvFeedback>
        </AvGroup>
        <AvGroup>
          <Label for="login-pwd">Password</Label>
          <AvInput
            type="password"
            name="password"
            id="login-pwd"
            required />
          <AvFeedback>Enter password for account</AvFeedback>
        </AvGroup>
        <FormGroup className="text-center">
          <Button
            size="lg"
            className="button-primary"
            block>
            Log In
          </Button>
        </FormGroup>
      </AvForm>
    )
  }
}

const mapStateToProps = state => ({
  error: state.errors ? state.errors.logError : undefined,
  isAuth: state.authUser ? state.authUser.isAuthenticated : undefined
})

export default withRouter(connect(mapStateToProps,  { loginUser})(LogInForm));
