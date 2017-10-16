import React, { Component } from "react";
import './Nav.css';
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

class Nav extends Component {

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
      <header>

        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">RTP Community Calendar</li>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/advertise">Advertise</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><button onClick={this.openModal}>Log In</button></li>
            </ul>
          </div>
        </div>
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
      </header>
    )
  }

}
export default Nav;
