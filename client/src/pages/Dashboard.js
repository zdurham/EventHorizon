import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserEvents, deleteEvent } from '../actions/eventActions';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.displayEvents(this.props.user._id)
  }

  displayEvents = (id) => {
    this.props.getUserEvents(id)
  }

  render() {
    return(
      <div className='container'>
        <h1>Welcome to the Dashboard</h1>
        <h1> Here are your events</h1>
        {this.props.userEvents ? 
          (this.props.userEvents.length > 1 ? 
          this.props.userEvents.map(event => {
            return (<div>
              <h1>{event.name}</h1>
              <h1>{event.description}</h1>
              <button onClick={() => this.delete(event._id)}>Delete</button>
            </div>
          )
          }) : 
          <div className='well'>
            <h1>{this.props.userEvents.name}</h1>
            <h1>{this.props.userEvents.description}</h1>
            <button onClick={() => this.props.deleteEvent(this.props.userEvents._id)}>Delete</button>
          </div>) : 
          <h1>There are no events to show </h1>
        }
      </div>
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
  user: state.authUser.user,
  userEvents: state.events.events,
})

export default connect(mapStateToProps, { getUserEvents, deleteEvent })(Dashboard)
