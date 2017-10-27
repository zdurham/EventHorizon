import React, { Component } from "react";
import { connect } from 'react-redux';
import DateCard from "../components/DateCard";
import TopEvents from "../components/TopEvents";
import { Container, Row, Col } from 'reactstrap';
import { getAllEvents } from '../actions/eventActions';

class AllEvents extends Component {
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
        <div>
            {this.props.allEvents.map(event => (
              <DateCard key={event._id} event={event}/>
            ))}
        </div>
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

export default connect(mapStateToProps, { getAllEvents })(AllEvents)
