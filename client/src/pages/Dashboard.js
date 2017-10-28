import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserEvents, getAllEvents, deleteEvent } from '../actions/eventActions';
import DashboardTabs from "../components/DashboardTabs";
import Profile from "../components/Profile";
import { Container, Row, Col } from 'reactstrap';
// import FontAwesome from 'react-fontawesome';

class Dashboard extends Component {

  render() {
    return(
      <main>
        <Container >
         <Row >
          <Col xs="6" sm="6" md="3" >
          <Profile />
          </Col>
          <Col xs="12" sm="12" md="8"  >
            <DashboardTabs />
          </Col>
        </Row>
        </Container>
      </main>
    )
  }
}


export default connect(null, { getUserEvents, getAllEvents, deleteEvent })(Dashboard)
