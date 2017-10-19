import React, { Component } from "react";
import './Nav.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Modal from 'react-modal';
import LogInModal from '../LogInModal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class navbarInstance extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      username: '',
      password: ''
    }

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">RTP Community Calendar</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/about">About</NavItem>
            <NavItem eventKey={3} href="/Events">Events</NavItem>
            <NavItem eventKey={4} href="/advertise">Advertise</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}><button onClick={this.openModal}>Log In</button></NavItem>
          </Nav>
        </Navbar.Collapse>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <LogInModal
            username={this.state.username}
            password={this.state.password}
            handleInputChange={this.handleInputChange}
          />
        </Modal>
      </Navbar>
    )
  }

}
export default navbarInstance;
