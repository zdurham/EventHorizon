import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserEvents, getAllEvents, deleteEvent } from '../actions/eventActions';
import ProfileEvents from "../components/ProfileEvents";
import AllEvents from "../components/AllEvents";
import Profile from "../components/Profile";
import {Container, Row, Col} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.displayEvents()
  }

  displayEvents = () => {
    this.props.getUserEvents()
  }

  render() {
    return(
      <main>
        <Container>
         <Row>
          <Col>
            <Profile classname="float-left"/>
          </Col>

          {/*Placeholder until the map function is fixed on 'ProfileEvents' component*/}
          <Col className="text-center">
            {this.props.userEvents.map(event => (
            <ProfileEvents key={event._id} event={event}/>
            ))}
            {/*<h2> Your events are loading</h2>
            <FontAwesome className="refresh" name="refresh" spin="false" size="5x" color="gray"></FontAwesome>*/}
          </Col>
          <Col>
            <AllEvents />
          </Col>
        </Row>
        </Container>
      </main>
    )
  }
  }

//   render() {
//     return(
//       <main className='container'>
//         <h1>Welcome to the Dashboard</h1>
//         <h1> Here are your events</h1>
//         {this.props.userEvents ?
//           (this.props.userEvents.length > 1 ?
//           this.props.userEvents.map(event => {
//             return (<div>
//               <h1>{event.name}</h1>
//               <h1>{event.description}</h1>
//               <button onClick={() => this.props.deleteEvent(event._id)}>Delete</button>
//             </div>
//           )
//           }) :
//           <div className='well'>
//             <h1>{this.props.userEvents.name}</h1>
//             <h1>{this.props.userEvents.description}</h1>
//             <button onClick={() => this.props.deleteEvent(this.props.userEvents._id)}>Delete</button>
//           </div>) :
//           <h1>There are no events to show </h1>
//         }
//       </main>
//     )
//   }

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
