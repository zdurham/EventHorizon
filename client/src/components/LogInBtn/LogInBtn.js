import React, { Component } from "react";
import './LogInBtn.css';
import FontAwesome from 'react-fontawesome';
import LogInForm from '../LogInForm';
import { Button, Col, Collapse, Modal, ModalHeader, ModalBody, NavItem, NavLink, Row } from 'reactstrap';

class LogInBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      password: ''
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
    const svgSize = '48px';
    return (
      <NavItem>
        <NavLink onClick={this.toggle}>Log In</NavLink>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign In Options
          </ModalHeader>
          <ModalBody>
            <LogInForm
              username={this.state.username}
              password={this.state.password}
              handleInputChange={this.handleInputChange}
            />
            <Row className="btn-container">
              <Col>
                <Button className="btn-login btn-social btn-facebook">
                  <FontAwesome
                    name="facebook">
                  </FontAwesome>
                  <span className="d-none d-sm-block">Facebook</span>
                </Button>
              </Col>
              <Col>
                <Button className="btn-login btn-social btn-google">
                  <FontAwesome
                    name="google">
                  </FontAwesome>
                  <span className="d-none d-sm-block">Google</span>
                </Button>
              </Col>
              <Col>
                <Button className="btn-login btn-social btn-twitter">
                  <FontAwesome
                    name="twitter">
                  </FontAwesome>
                  <span className="d-none d-sm-block">Twitter</span>
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </NavItem>
    );
  }
}

export default LogInBtn;
