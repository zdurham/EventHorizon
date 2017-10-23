import React, { Component } from "react";
import DateCard from "../../components/DateCard";
import TopEvents from "../../components/TopEvents";
import EventBtn from "../../components/EventBtn";
import { Container, Row, Col } from 'reactstrap';

class Events extends Component {

  render() {

    return (
        <Container tag="main">

            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <DateCard />
                    <DateCard />
                    <DateCard />
                    <DateCard />
                </Col>
                <Col lg="auto">
                    <EventBtn />
                </Col>
            </Row>
            <Row>
                <Col lg="auto">
                    <TopEvents />
                </Col>
            </Row>

        </Container>
    )
  }
}
export default Events;
