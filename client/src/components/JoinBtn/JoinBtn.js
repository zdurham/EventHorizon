import React, { Component } from "react";
import Ionicon from 'react-ionicons'
import './JoinBtn.css';
import SignUpForm from '../SignUpForm';
import { Collapse, Modal, ModalFooter, ModalHeader, ModalBody, ModalFooterNavbar, Button } from 'reactstrap';

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

    <div>
    <Button size="lg" id="joinBtn" block onClick={this.toggle}>{this.props.buttonLabel} Join Our Community!</Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader id="header" toggle={this.toggle}>Join</ModalHeader>
        <ModalBody>
        <SignUpForm
        username={this.state.username}
        password={this.state.password}
        handleInputChange={this.handleInputChange}
        />
        <br />
        <h4> Or Via </h4>
        <hr />
        <Button color="info" block>Twitter
           <br />
           <Ionicon id="icon" icon="ion-social-twitter" fontSize="20" color="white"></Ionicon></Button>
        <Button color="primary" block>Facebook
          <br />
          <Ionicon id="icon" icon="ion-social-facebook" fontSize="22" color="white"></Ionicon>
        </Button>
        <Button color="danger" block>Google
          <br />
          <Ionicon id="icon" icon="ion-social-googleplus" fontSize="20" color="white"></Ionicon></Button>        
        <ModalFooter>
        </ModalFooter>
        </ModalBody>
    </Modal>
    </div>
    );
  }
}

export default JoinBtn;