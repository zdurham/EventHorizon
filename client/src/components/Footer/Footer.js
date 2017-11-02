import React, { Component } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Footer extends Component {

  handleOnClick = () => {
    window.scrollTo(0, 0)
  }

  render() {
    let authLinks;
    if (this.props.authenticated === true) {
      authLinks =
      <span>
        <NavLink to="/new_event" onClick={this.handleOnClick}>Add Event</NavLink>
        <NavLink to="/dashboard" onClick={this.handleOnClick}>Dashboard</NavLink>
      </span>
    }
    return (
      <footer>
        <Container className="footer-links">
          <Row>
            <Col xs="12" md="4">
              <h5>Contributors</h5>
              <hr className="line-style"/>
              <a href="https://github.com/MitHipster" target="_blank" rel="noopener noreferrer">Tim Acker</a>
              <a href="https://github.com/cbaddeley" target="_blank" rel="noopener noreferrer">Cory Baddeley</a>
              <a href="https://github.com/zdurham" target="_blank" rel="noopener noreferrer">Zach Durham</a>
              <a href="https://github.com/MoHampton" target="_blank" rel="noopener noreferrer">Mo Hampton</a>
            </Col>
            <Col xs="12" md="4">
              <h5>Site Map</h5>
              <hr className="line-style"/>
              <NavLink to="/" onClick={this.handleOnClick}>Home</NavLink>
              <NavLink to="/events" onClick={this.handleOnClick}>View Events</NavLink>
              {authLinks}
            </Col>
            <Col xs="12" md="4">
              <h5>Social</h5>
              <hr className="line-style"/>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright">
          <Container>
            © 2017 MIT License
          </Container>
        </div>
      </footer>
    );
  }
}


  const mapStateToProps = state => ({
    authenticated: state.authUser.isAuthenticated
  })

  export default connect(mapStateToProps)(Footer);
