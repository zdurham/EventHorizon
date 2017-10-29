import React, { Component } from "react";
import { connect } from 'react-redux';
import DateCard from "../components/DateCard";
import TopEvents from "../components/TopEvents";
import { Container, Row, Col } from 'reactstrap';
import { getUserAttending } from '../actions/eventActions';


// This now only collects user attending stuff
class AllEvents extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    this.displayEvents()
  }

  displayEvents = () => {
    this.props.getUserAttending(this.props.user._id)
  }

  render() {
    console.log(this.props.userAttendingEvents)
    return (
        <div>
            {this.props.userAttendingEvents && this.props.userAttendingEvents.map(event => (
              <DateCard key={event._id} event={event}/>
            ))}
        </div>
    )
  }
}


const mapStateToProps = state => ({
  userAttendingEvents: state.events.userAttendingEvents,
  user: state.authUser.user 
})

export default connect(mapStateToProps, { getUserAttending })(AllEvents)
