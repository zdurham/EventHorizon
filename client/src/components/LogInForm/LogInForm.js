import React from "react";
import './LogInForm.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LogInForm = (props) => {
  return (
    <div>
    <Form>
      <FormGroup>
          <Label for="username">Username</Label>{' '}
          <Input 
          type="text" 
          name="username" 
          id="username" 
          placeholder="Cool Kid" 
          value={props.username}
          onChange={props.handleInputChange}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="userPassword">Password</Label>{' '}
          <Input 
          type="password" 
          name="password" 
          id="userPassword" 
          placeholder="Top Secret" 
          value={props.password}
          onChange={props.handleInputChange}
          />
        </FormGroup>
        {' '}
        <Button id="submitBtn" value="log-in" block>Log In</Button>
    </Form>
    </div>
  )
}
export default LogInForm;
