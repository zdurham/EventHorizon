import React, { Component } from "react";
import './Nav.css';
import { Container, Collapse, Modal, ModalFooter, ModalHeader, ModalBody, ModalFooterNavbar, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import LogInBtn from '../LogInBtn';


class navbarInstance extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Navbar className='fixed-top' color="faded" light expand="lg">
        <Container>
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
        </Container>
      </Navbar>
    );
  }
}
export default navbarInstance;
