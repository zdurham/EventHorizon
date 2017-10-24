import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import './EventBtn.css';
import { Collapse, Modal, ModalFooter, ModalHeader, ModalBody, ModalFooterNavbar, Button } from 'reactstrap';

class EventBtn extends Component {
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
    <Button size="lg" id="eventBtn" color="danger" block onClick={this.toggle}>{this.props.buttonLabel}<FontAwesome id="icon" icon="ion-plus" fontSize="20" color="white"></FontAwesome>Event</Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader id="header" toggle={this.toggle}>Add Event</ModalHeader>
        <ModalBody>
        <br />
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
    </Modal>
    </div>
    );
  }
}

export default EventBtn;
