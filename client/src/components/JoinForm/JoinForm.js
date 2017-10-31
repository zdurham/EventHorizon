import React, { Component } from "react";
import { connect } from 'react-redux'
import './JoinForm.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label, Row, Col } from 'reactstrap';
import { registerUser } from '../../actions/authActions'
import { withRouter } from 'react-router-dom'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      username: '',
      password: '',
      confPassword: '',
      firstName: '',
      lastName: '',

    }
  }

  handleValidSubmit = (event, values) => {
    event.preventDefault()
    this.setState({values});
    if (this.state.password === this.state.confPassword) {
      this.props.registerUser({
        email: this.state.values.email,
        username: this.state.values.username,
        password: this.state.values.password,
        firstName: this.state.values.firstName,
        lastName: this.state.values.lastName
      })
      this.props.toggle()
    }
    else {
      console.log("The passwords don't match")
    }

  }

  render() {
    return(
      <AvForm id="join-form" onValidSubmit={this.handleValidSubmit}>
        <Row>
          <Col xs="12" sm="6">
            <AvGroup>
              <Label for="join-firstname">First Name</Label>
              <AvInput
                type="text"
                name="firstname"
                id="join-firstname"
                required />
              <AvFeedback>This field is required</AvFeedback>
            </AvGroup>
          </Col>
          <Col xs="12" sm="6">
            <AvGroup>
              <Label for="join-lastname">Last Name</Label>
              <AvInput
                type="text"
                name="lastname"
                id="join-lastname"
                required />
              <AvFeedback>This field is required</AvFeedback>
            </AvGroup>
          </Col>
        </Row>
        <AvGroup>
          <Label for="join-user">Username</Label>
          <AvInput
            type="text"
            name="username"
            id="join-user"
            placeholder="Your community name"
            required />
          <AvFeedback>This field is required</AvFeedback>
        </AvGroup>
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

export default withRouter(connect(null, { registerUser })(SignUpForm));
