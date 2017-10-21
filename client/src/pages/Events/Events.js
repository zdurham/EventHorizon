import React, { Component } from "react";
import DateCard from "../../components/DateCard";
import TopEvents from "../../components/TopEvents";
import { Container, Row, Col } from 'reactstrap';

class Events extends Component {

  render() {

    return (
        <Container>
        
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <DateCard />
                    <DateCard />
                    <DateCard />
                    <DateCard />
                </Col>
                <Col lg="auto">
                    <TopEvents />
                </Col>
            </Row>
        </Container>
    )
  }
}
export default Events;