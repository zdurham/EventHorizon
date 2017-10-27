import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUserEvents } from '../../actions/eventActions';
import FontAwesome from 'react-fontawesome';
import './ProfileEvents.css';
import { Card, CardColumns, CardTitle, CardText, Collapse } from 'reactstrap';

class ProfileEvents extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  componentDidMount() {
    console.log(this.props.user)
    this.displayEvents(this.props.user._id)
  }

  displayEvents = (id) => {
    this.props.getUserEvents(id)
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
    <div>
      <h1 className="text-success">Events</h1>
      <CardColumns>
          {this.props.userEvents &&
          <Card className="userEvent">
          
          {this.props.userEvents && this.props.userEvents.map(event => {
          return(
          <div className='container'>
            <CardTitle className="eventName text-left" onClick={this.toggle}>{event.name}</CardTitle> 
            
            <CardText>
            <div className="userName" >Added by:</div>
            <div className="eventDate">Date: </div>
            </CardText>
  
            <CardText>
            <Collapse isOpen={this.state.collapse}>
              <CardText>{event.description}</CardText>
                <FontAwesome className="up-vote" name="thumbs-o-up" size="2x" color="gray"></FontAwesome>
                <FontAwesome className="down-vote" name="thumbs-o-down" size="2x" color="gray"></FontAwesome>
              </Collapse>
            </CardText>
              </div>
              )
              })}
            </Card>
            }
          </CardColumns> 
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

export default connect(mapStateToProps, { getUserEvents })(ProfileEvents)