import React, { Component } from "react";
import './Nav.css';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink as NavStrapLink } from 'reactstrap'
import { NavLink } from 'react-router-dom'
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
    let button;
    if (!this.props.authenticated) {
      button = <LogInBtn />
    }
    else {
      button = 
      <div>
        <NavItem>
          <NavStrapLink>
            <NavLink to='/dashboard' exact >Dashboard</NavLink>
          </NavStrapLink>
        </NavItem>
        <NavItem>
          <NavStrapLink onClick={this.props.logoutUser}>
            Logout
          </NavStrapLink>
        </NavItem>
      </div>
    }
    return (
      <Navbar className='fixed-top' color="faded" light expand="lg">
        <Container>
          <NavbarBrand to="/">CommunityCal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavStrapLink>
                  <NavLink to="/Events">Events</NavLink>
                </NavStrapLink>
              </NavItem>
              <NavItem>
                <NavStrapLink>
                  <NavLink to="/Advertise">Advertise</NavLink>
                </NavStrapLink>
              </NavItem>
              {button}
            </Nav>
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
