import React, { Component } from "react";
import Ionicon from 'react-ionicons'
import './EventBtn.css';
import { Collapse, Modal, ModalFooter, ModalHeader, ModalBody, ModalFooterNavbar, Button } from 'reactstrap';
{/*import SignUpForm from '../EventForm';*/}

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
    <Button size="lg" id="eventBtn" color="danger" block onClick={this.toggle}>{this.props.buttonLabel}<Ionicon id="icon" icon="ion-plus" fontSize="20" color="white"></Ionicon>Event</Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader id="header" toggle={this.toggle}>Add Event</ModalHeader>
        <ModalBody>
          Insert Form Here
        {/*<EventForm
        username={this.state.username}
        genre= {this.state.genre}
        description={this.state.description}
        date={this.state.date}
        startTime= {this.state.startTime}
        endTime= {this.state.endTime}
        location= {this.state.location}
        address= {this.state.address}
        city= {this.state.city}
        cost= {this.sate.cost}
        link= {this.state.link}
        handleInputChange={this.handleInputChange}
        />*/}
        <br />   
        <ModalFooter>
        </ModalFooter>
        </ModalBody>
    </Modal>
    </div>
    );
  }
}

export default EventBtn;