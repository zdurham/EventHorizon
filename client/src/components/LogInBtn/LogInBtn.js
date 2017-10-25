import React, { Component } from "react";
import './LogInBtn.css';
import LogInForm from '../LogInForm';
import SocialBtns from '../SocialBtns';
import { Modal, ModalHeader, ModalBody, ModalFooter, NavItem, NavLink } from 'reactstrap';

class LogInBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      password: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <NavItem>
        <NavLink onClick={this.toggle}>Log In</NavLink>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}>
          <ModalHeader
            toggle={this.toggle}>
            Sign In Options
          </ModalHeader>
          <ModalBody>
            <LogInForm
              username={this.state.username}
              password={this.state.password}
              handleInputChange={this.handleInputChange}
              toggle={this.toggle}
            />
          </ModalBody>
          <ModalFooter>
            <SocialBtns />
          </ModalFooter>
        </Modal>
      </NavItem>
    );
  }
}

export default LogInBtn;
