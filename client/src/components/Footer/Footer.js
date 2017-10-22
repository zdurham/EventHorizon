import React from "react";
import './Footer.css';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';


const Footer = () =>
  <Container>
    <Row>
      <Col sm="12" md="4">
        <h5>Contributors</h5>
        <hr />
        <a href="https://github.com/MitHipster" target="_blank" rel="noopener noreferrer">Tim Acker</a>
        <a href="https://github.com/cbaddeley" target="_blank" rel="noopener noreferrer">Cory Baddeley</a>
        <a href="https://github.com/zdurham" target="_blank" rel="noopener noreferrer">Zach Durham</a>
        <a href="https://github.com/MoHampton" target="_blank" rel="noopener noreferrer">Mo Hampton</a>
      </Col>
      <Col sm="12" md="4">
        <h5>Site Map</h5>
        <hr />
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#calendar">Calendar</a>
        <a href="#advertise">Advertise</a>
      </Col>
      <Col sm="12" md="4">
        <h5>Social Media</h5>
        <hr />
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
      </Col>
  </Row>
  </Container>

export default Footer;
