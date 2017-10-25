import React, { Component } from "react";
import './EventForm.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="eventName">Event Name</Label>
          <Input
            type="text"
            name="name"
            id="eventName"
          />
        </FormGroup>
      </Form>
    );
  }
}