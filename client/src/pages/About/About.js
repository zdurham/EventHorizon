import React, { Component } from "react";
import JoinBtn from "../../components/JoinBtn";
import Carousel from "../../components/Carousel";
import { Container, Row, Col } from 'reactstrap';
import Ionicon from 'react-ionicons'

class About extends Component {

  render() {

    return (
      <main>
        <div className= "carousel">
          <Carousel />
        </div>
        <Container>
          <hr />
          <Row className="infoBar" id="info">
            <Col xs="6" sm="4">
              <h3>Post</h3>
              <Ionicon icon="ion-android-calendar" fontSize="35px"></Ionicon>
              <p> Do you have a fun event?  Please Share It! </p>
            </Col>
            <Col xs="6" sm="4">
              <h3>Vote</h3>
              <Ionicon icon="ion-thumbsup" shake={true} fontSize="35px" color="green"></Ionicon>
              <Ionicon icon="ion-thumbsdown" shake={true} fontSize="35px" color="red"></Ionicon>
              <p> Vote for the best events in RTP. </p>
            </Col>
            <Col sm="4">
              <h3>Join</h3>
              <Ionicon icon="ion-ios-people" fontSize="35px"></Ionicon>
              <p> Get out &amp; join the fun! </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <JoinBtn />
              <hr />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default About;
