import React, { Component } from "react";
import { connect } from 'react-redux';
import DateCard from "../components/DateCard";
import TopEvents from "../components/TopEvents";
import { Container, Row, Col } from 'reactstrap';
import { getAllEvents } from '../actions/eventActions';

class Events extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllEvents()
  }

  render() {
    return (
      <Container tag="main">
        <Row>
          {!this.props.allEvents ? (
            <Col xs='12' md='8'>
              <h2>No Events To Display</h2>
            </Col>
          ) : (
            <Col xs="12" md="8">
              {this.props.allEvents.map(event => (
                <DateCard
                  key={event._id}
                  event={event}/>
              ))}
            </Col>
          )}
          <Col lg="auto">
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

const mapDispatchToProps = dispatch => ({
  getAllEvents() {
    dispatch(getAllEvents())
  }
})

const mapStateToProps = state => ({
  allEvents: state.events.events,
  user: state.authUser.user ? state.authUser : {}
})

export default connect(mapStateToProps, { getAllEvents })(Events)
