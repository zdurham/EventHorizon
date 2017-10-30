import React, { Component } from 'react';
import DashboardTabs from "../components/DashboardTabs";
import Profile from "../components/Profile";
import { Container, Row, Col } from 'reactstrap';

class Dashboard extends Component {

  render() {
    return(
      <Container tag="main">
        <Row >
          <Col
            xs={{ size: 8, offset: 2 }}
            sm={{ size: 12, offset: 0 }}
            md="4"
            lg="3" >
            <Profile />
          </Col>
          <Col
            xs="12"
            sm="12"
            md="8"
            lg="9">
            <DashboardTabs />
          </Col>
        </Row>
      </Container>
    )
  }
}


export default Dashboard
