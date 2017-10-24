import React, { Component } from "react";
import './SocialBtns.css';
import FontAwesome from 'react-fontawesome';
import { Button, Col, Collapse, Modal, ModalHeader, ModalBody, ModalFooter, NavItem, NavLink, Row } from 'reactstrap';

class SearchBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const svgSize = '48px';
    return (
      <Row>
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
    );
  }
}

export default SearchBtns;
