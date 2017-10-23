import React from 'react';
import Ionicon from 'react-ionicons';
import './Info.css';
import { Container, Row, Col } from 'reactstrap';
const svgSize = '48px';
const svgColor = '#841983';

const Info = () =>
  <Container className="info-bar">
    <hr className="line-style" />
    <Row className="info">
      <Col sm="12" md="4">
        <h3>Search</h3>
        <Ionicon
          icon="ion-android-search"
          fontSize={svgSize}
          color={svgColor}>
        </Ionicon>
        <p>Search for events using keywords, browse events by categories you're interested in, or just see which events are happening soon.</p>
      </Col>
      <Col sm="12" md="4">
        <h3>Vote</h3>
        <Ionicon
          icon="ion-thumbsup"
          fontSize={svgSize}
          color={svgColor}>
        </Ionicon>
        <Ionicon
          icon="ion-thumbsdown"
          fontSize={svgSize}
          color={svgColor}>
        </Ionicon>
        <p>Vote up or down the events in your area to let other users know which events are generating the most interest as well as those that are not.</p>
      </Col>
      <Col sm="12" md="4">
        <h3>Post</h3>
        <Ionicon
          icon="ion-android-calendar"
          fontSize={svgSize}
          color={svgColor}>
        </Ionicon>
        <p>Do you know of an exciting event coming up that is not listed on the site? Just log in, enter the event information, and we'll get the word out.</p>
      </Col>
    </Row>
    <hr className="line-style" />
  </Container>

  export default Info;
