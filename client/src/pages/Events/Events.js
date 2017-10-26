import React, { Component } from "react";
import { connect } from 'react-redux';
import DateCard from "../../components/DateCard";
import TopEvents from "../../components/TopEvents";
import { Container, Row, Col } from 'reactstrap';
import { getAllEvents } from '../../actions/eventActions';

class Events extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.displayEvents()
  }

  displayEvents = () => {
    this.props.getAllEvents()
  }

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
