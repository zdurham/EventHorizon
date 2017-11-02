import React, { Component } from "react";
import './JoinBtn.css';
import JoinForm from '../JoinForm';
// import SocialBtns from '../SocialBtns';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { toggleErr } from '../../actions/authActions'
import { connect } from 'react-redux'

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
      <div>
        <Button
          size={this.props.size}
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

export default connect(null, { toggleErr })(JoinBtn);
