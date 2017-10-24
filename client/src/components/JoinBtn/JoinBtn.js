import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import './JoinBtn.css';
import JoinForm from '../JoinForm';
import SocialBtns from '../SocialBtns';
import { Container, Modal, ModalFooter, ModalHeader, ModalBody, Button } from 'reactstrap';

class JoinBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
      <Container className="text-center">
        <Button
          size="lg"
          className="button-primary"
          onClick={this.toggle}>
          Join Community
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader
            toggle={this.toggle}>
            Sign Up Options
          </ModalHeader>
          <ModalBody>
            <JoinForm
              username={this.state.username}
              password={this.state.password}
              handleInputChange={this.handleInputChange}
            />
          </ModalBody>
          <ModalFooter>
            <SocialBtns />
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default JoinBtn;
