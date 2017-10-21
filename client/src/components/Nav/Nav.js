import React, { Component } from "react";
import './Nav.css';
import { Collapse, Modal, ModalFooter, ModalHeader, ModalBody, ModalFooterNavbar, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import LogInBtn from '../LogInBtn';


class navbarInstance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modal: false
    };
      this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
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
        <Navbar color="faded" light expand="lg">
          <NavbarBrand href="/">RTP Community Calendar</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Advertise">Advertise</NavLink>
              </NavItem>
              <NavItem>
                <LogInBtn />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default navbarInstance;
