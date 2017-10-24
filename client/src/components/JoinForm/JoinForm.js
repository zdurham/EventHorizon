import React, { Component } from "react";
import { connect } from 'react-redux'
import './JoinForm.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label } from 'reactstrap';
import { registerUser } from '../../actions/authActions'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confPassword: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.registerUser(this.state)
    this.props.history.push('/dashboard')
  }

  render() {
    return(
      <AvForm id="join-form" onSubmit={this.handleSubmit}>
        <AvGroup>
          <Label for="join-email">Email</Label>
          <AvInput
            type="email"
            name="email"
            id="join-email"
            required />
          <AvFeedback>Enter a valid email address</AvFeedback>
        </AvGroup>
        <AvGroup>
          <Label for="join-pwd">Password</Label>
          <AvInput
            type="password"
            name="password"
            id="join-pwd"
            required />
          <AvFeedback>Enter password for account</AvFeedback>
        </AvGroup>
        <AvGroup>
          <Label for="join-confirm">Confirm Password</Label>
          <AvInput
            type="password"
            name="confirm"
            id="join-confirm"
            required />
          <AvFeedback>Confirm password for account</AvFeedback>
        </AvGroup>
        <FormGroup className="text-center">
          <Button
            size="lg"
            className="button-primary"
            block>
            Join Community
          </Button>
        </FormGroup>
      </AvForm>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser() {
    dispatch(registerUser())
  }
})

export default connect(null, { registerUser })(SignUpForm);
