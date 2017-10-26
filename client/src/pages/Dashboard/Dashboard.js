import React, { Component } from 'react';
import Profile from "../../components/Profile";
import ProfileEvents from "../../components/ProfileEvents";
import FontAwesome from 'react-fontawesome';
import { Container, Row, Col } from 'reactstrap';

class Dashboard extends Component {

  render() {
    return(
      <main>
        <Container>
         <Row>
          <Col>
            <Profile classname="float-left"/>
          </Col>

          {/*Placeholder until the map function is fixed on 'ProfileEvents' component*/}
          <Col className="text-center">
            <h1 className="text-success">Events</h1>
            {/*<ProfileEvents className="float-right"/>*/}
            <h2> Your events are loading</h2>
            <FontAwesome className="refresh" name="refresh" spin="false" size="5x" color="gray"></FontAwesome>
          </Col>
        </Row>
        </Container>
      </main>
    );
  }
}

export default Dashboard;
