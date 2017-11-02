import React, { Component } from "react";
import './LogInBtn.css';
import LogInForm from '../LogInForm';
// import SocialBtns from '../SocialBtns';
import { Modal, ModalHeader, ModalBody, NavItem, NavLink } from 'reactstrap';
import { toggleErr } from '../../actions/authActions'
import { connect } from 'react-redux'

class LogInBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      password: ''
    };
  }

  toggle = () => {
    this.props.login();
    this.setState({
      modal: !this.state.modal
    });
    this.props.toggleErr()
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
            Sign In
          </ModalHeader>
          <ModalBody>
            <LogInForm
              username={this.state.username}
              password={this.state.password}
              handleInputChange={this.handleInputChange}
              toggle={this.toggle}
            />
          </ModalBody>
          {/* <ModalFooter>
            <SocialBtns />
          </ModalFooter> */}
        </Modal>
      </NavItem>
    );
  }
}

export default connect(null, { toggleErr })(LogInBtn);
