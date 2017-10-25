import React, { Component } from "react";
import './Nav.css';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRLink } from 'react-router-dom'
import LogInBtn from '../LogInBtn';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions'


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
    let dynamicNav;
    if (!this.props.authenticated) {
      dynamicNav =
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={RRLink} to="/Events">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRLink} to="/Advertise">Advertise</NavLink>
        </NavItem>
        <LogInBtn />
      </Nav>
    }
    else {
      dynamicNav =
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={RRLink} to="/new_event">Create Event</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRLink} to='/dashboard' exact >Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.props.logoutUser}>Logout</NavLink>
        </NavItem>
      </Nav>
    }
    return (
      <Navbar className='fixed-top' color="faded" light expand="lg">
        <Container>
          <NavbarBrand to="/">CommunityCal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {dynamicNav}
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authUser.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  logoutUser() {
    dispatch(logoutUser())
  }
})

export default connect(mapStateToProps, { logoutUser })(navbarInstance);
