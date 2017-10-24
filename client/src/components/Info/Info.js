import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Info.css';
import { Container, Row, Col } from 'reactstrap';

const Info = () =>
  <Container className="info-bar">
    <hr className="line-style" />
    <Row className="info">
      <Col xs="12" md="4">
        <h3>Search</h3>
        <FontAwesome
          name="search">
        </FontAwesome>
        <p>Search for events using keywords, browse events by categories you're interested in, or just see which events are happening soon.</p>
      </Col>
      <Col xs="12" md="4">
        <h3>Vote</h3>
        <FontAwesome
          name="thumbs-up">
        </FontAwesome>
        <p>Vote up or down the events in your area to let other users know which events are generating the most interest as well as those that are not.</p>
      </Col>
      <Col xs="12" md="4">
        <h3>Post</h3>
        <FontAwesome
          name="calendar-o">
        </FontAwesome>
        <p>Do you know of an exciting event coming up that is not listed on the site? Just log in, enter the event information, and we'll get the word out.</p>
      </Col>
    </Row>
    <hr className="line-style" />
  </Container>

  export default Info;
