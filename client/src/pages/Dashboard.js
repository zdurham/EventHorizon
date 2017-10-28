import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserEvents, getAllEvents, deleteEvent } from '../actions/eventActions';
import ProfileEvents from "../components/ProfileEvents";
// import AllEvents from "../components/AllEvents";
import DateCard from '../components/DateCard'
import Profile from "../components/Profile";
import { Container, Row, Col } from 'reactstrap';
// import FontAwesome from 'react-fontawesome';

class Dashboard extends Component {

  componentDidMount() {
    this.displayEvents()
  }

  displayEvents = () => {
    this.props.getUserEvents()
    this.props.getAllEvents()
  }

  render() {
    return(
      <main>
        <Container>
         <Row>
          <Col>
            <Profile user={this.props.user} classname="float-left"/>
          </Col>
          {/*  Conditional Statement for Rendering  */}
          {!this.props.userEvents ? (
            <Col className="text-center">
              <h2>You haven't made any events</h2>
              {/*<FontAwesome className="refresh" name="refresh" spin="false" size="5x" color="gray"></FontAwesome>*/}
            </Col>
          ) : (
            <Col className="text-center">
              {this.props.userEvents.map(event => (
                <ProfileEvents key={event._id} event={event}/>
              ))}
            </Col>
          )}
          <Col>
            {this.props.allEvents && this.props.allEvents.map(event => (
              <DateCard key={event._id} event={event}/>
            ))}
          </Col>
        </Row>
        </Container>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUserEvents() {
    dispatch(getUserEvents())
  },
  deleteEvent() {
    dispatch(deleteEvent())
  }
})

const mapStateToProps = state => ({
  user: state.authUser.user ? state.authUser.user : {} ,
  userEvents: state.events.userEvents,
  allEvents: state.events.events
})

export default connect(mapStateToProps, { getUserEvents, getAllEvents, deleteEvent })(Dashboard)
