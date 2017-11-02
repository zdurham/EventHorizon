import React, { Component } from "react";
import './Nav.css';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRLink } from 'react-router-dom';
import LogInBtn from '../LogInBtn';
import { connect } from 'react-redux';
import { logoutUser, toggleErr } from '../../actions/authActions';
import { withRouter } from 'react-router';


class navbarInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    this.props.toggleErr()
  }

  login = () => {
    this.closeNavbar();
  }

  logout = () => {
    this.props.history.push('/');
    this.props.logoutUser();
    this.closeNavbar();
  }

  closeNavbar = () => {
    window.scrollTo(0, 0);
    if (this.state.isOpen) {
      this.toggle();
    }
  }

  render() {
    let dynamicNav;
    let viewEvents =
      <NavItem>
        <NavLink onClick={this.closeNavbar} tag={RRLink} to="/events">View Events</NavLink>
      </NavItem>
    if (!this.props.authenticated) {
      dynamicNav =
      <Nav className="ml-auto" navbar>
        {viewEvents}
        <LogInBtn login={this.closeNavbar} />
      </Nav>
    }
    else {
      dynamicNav =
      <Nav className="ml-auto" navbar>
        {viewEvents}
        <NavItem>
          <NavLink onClick={this.closeNavbar} tag={RRLink} to="/new_event">Add Event</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.closeNavbar} tag={RRLink} to='/dashboard' exact >Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.logout}>Logout</NavLink>
        </NavItem>
      </Nav>
    }
    return (
      <Navbar className='fixed-top' color="faded" light expand="lg">
        <Container>
          <NavbarBrand onClick={this.closeNavbar} tag={RRLink} to="/">EventHorizon</NavbarBrand>
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

export default withRouter(connect(mapStateToProps, { logoutUser, toggleErr })(navbarInstance));
