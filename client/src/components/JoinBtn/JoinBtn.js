import React, { Component } from "react";
import './JoinBtn.css';
import JoinForm from '../JoinForm';
// import SocialBtns from '../SocialBtns';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

class JoinBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
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
      <div>
        <Button
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
            Sign Up
          </ModalHeader>
          <ModalBody>
            <JoinForm
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
      </div>
    );
  }
}

export default JoinBtn;
