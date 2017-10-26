import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserEvents } from '../actions/eventActions';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.user)
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
        {this.props.userEvents &&
          <h1> Your events have loaded</h1>
        }
        {this.props.userEvents && this.props.userEvents.map(event => {
          return(
            <div className='container'>
              <p>{event.name}</p>
              <p>{event.genre}</p>
              <p>{event.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUserEvents() {
    dispatch(getUserEvents())
  }
})

const mapStateToProps = state => ({
  user: state.authUser.user,
  userEvents: state.events.events,
})

export default connect(mapStateToProps, { getUserEvents })(Dashboard)
