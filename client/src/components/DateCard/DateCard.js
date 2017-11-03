import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import './DateCard.css';
import { Button, Card, CardBody, CardLink, CardTitle, CardSubtitle, CardText, Collapse, UncontrolledTooltip } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux'
import { upvote, downvote, unvote, attendEvent, unAttendEvent, deleteEvent } from '../../actions/eventActions'

class DateCard extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  clickUpvote = (eventId, userId) => {
    this.props.upvote(eventId, userId)
    // insert conditional stuff here
  }

  clickDownvote = (eventId, userId) => {
    this.props.downvote(eventId, userId)
    // insert conditional stuff here
  }

  clickUnvote = (eventId, userId) => {
    this.props.unvote(eventId, userId)
  }

  clickAttend = (eventId, userId) => {
    this.props.attendEvent(eventId, userId)
  }

  clickUnAttend = (eventId, userId) => {
    this.props.unAttendEvent(eventId, userId)
  }

  remove = (eventId, userId) => {
    console.log('userId',userId)
    this.props.deleteEvent(eventId, userId)
  }

  eventDateTime = (date, start, end) => {
    if (end.length !== 0) {
      end = ' to ' + moment(end, 'HH:mm').format('h:mmA')
    }
    return (
      moment(date).format('ddd, MMMM D')
      + ' - '
      + moment(start, 'HH:mm').format('h:mmA')
      + end
    );
  }

  render() {

    // attend button
    let attend = <Button size="sm" className="button-primary" onClick={() => this.clickAttend(this.props.event._id, this.props.user._id)}> Attend </Button>;

    // delete button
    let deletes = <Button size="sm" className="button-delete" onClick={() => this.remove(this.props.event._id, this.props.user._id)}> Delete </Button>;

    // upvote button
    let upvote = <FontAwesome onClick={() => this.clickUpvote(this.props.event._id, this.props.user._id)} className="up-vote" name="thumbs-o-up"></FontAwesome>;

    // downvote button
    let downvote = <FontAwesome onClick={() => this.clickDownvote(this.props.event._id, this.props.user._id)} className="down-vote" name="thumbs-o-down"></FontAwesome>;

    // Do some checks to see if the user is logged in
    if (!this.props.user || this.props.user.isAdvertiser) {

      upvote = <FontAwesome disabled='true' className="up-vote" name="thumbs-o-up" style={{cursor: "default"}}></FontAwesome>;

      downvote = <FontAwesome disabled='true' className="down-vote" name="thumbs-o-down" style={{cursor: "default"}}></FontAwesome>

      attend = '';
    }
    else if (this.props.user && this.props.user.isAdvertiser) {
      attend = ''
    }
    else {
      // If user has already clicked to attend, show unattend
      if (this.props.event.attendingList.includes(this.props.user._id)) {
        attend = <Button size="sm" className="button-primary" onClick={() => this.clickUnAttend(this.props.event._id, this.props.user._id)}> Attending </Button>
      }

      // if user has upvoted already, sub unvote function, change color
      if (this.props.event.vote.positive.includes(this.props.user._id)) {
        upvote = <FontAwesome onClick={() => this.clickUnvote(this.props.event._id, this.props.user._id)} className="up-vote-active" name="thumbs-o-up"></FontAwesome>
      }

      // if user has downvoted already, sub unvote function, change color
      if (this.props.event.vote.negative.includes(this.props.user._id)) {
        downvote = <FontAwesome onClick={() => this.clickUnvote(this.props.event._id, this.props.user._id)} className="down-vote-active" name="thumbs-o-down"></FontAwesome>
      }
    }

    return (
      <Card key={this.props.event._id}>
        <CardBody className={this.props.card}>
          <CardTitle>{this.props.event.name}</CardTitle>
          <CardSubtitle tag="h5">{this.props.event.location}</CardSubtitle>
          <CardText >
            <span>
              <FontAwesome name="calendar-check-o"></FontAwesome>
              {this.eventDateTime(this.props.event.date, this.props.event.startTime, this.props.event.endTime)}
            </span>
          </CardText>
          {this.props.attendees ? (
            <CardText>
              <span>
                Total Attendees: {this.props.event.attendingList.length}
              </span>
            </CardText>
          ) : (
            null
          )}
          <CardText>
            {
              (this.props.event.allDay === true) ?
              <span>
                <FontAwesome
                  id={`all-${this.props.event._id}`}
                  className="card-extras"
                  name="sun-o">
                </FontAwesome>
                <UncontrolledTooltip
                  placement="top"
                  delay={0}
                  target={`all-${this.props.event._id}`}>
                  All Day Event
                </UncontrolledTooltip>
              </span> : ''
            }
            {
            (this.props.event.kidFriendly === true) ?
              <span>
                <FontAwesome
                  id={`kid-${this.props.event._id}`}
                  className="card-extras"
                  name="child">
                </FontAwesome>
                <UncontrolledTooltip
                  placement="top"
                  delay={0}
                  target={`kid-${this.props.event._id}`}>
                  Kid Friendly
                </UncontrolledTooltip>
              </span> : ''
            }
            {
            (this.props.event.petFriendly === true) ?
              <span>
                <FontAwesome
                  id={`pet-${this.props.event._id}`}
                  className="card-extras"
                  name="paw">
                </FontAwesome>
                <UncontrolledTooltip
                  placement="top"
                  delay={0}
                  target={`pet-${this.props.event._id}`}>
                  Pet Friendly
                </UncontrolledTooltip>
              </span> : ''
            }
          </CardText>
          <div className="card-buttons">
            <div>
              <Button
                size="sm"
                className="button-primary"
                onClick={this.toggle}>
                More Info
              </Button>
              {attend}
              {(this.props.deleteBtn === true) ? deletes : ''}
            </div>
            <div className="card-votes">
              <div className="card-vote up">
                {upvote}
                <span>{this.props.event.vote.positive && this.props.event.vote.positive.length}</span>
              </div>
              <div className="card-vote down">
                {downvote}
                <span>{this.props.event.vote.negative && this.props.event.vote.negative.length}</span>
              </div>
            </div>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <div className="line-container">
              <hr className="line-style" />
            </div>
            <CardText>{this.props.event.description}</CardText>
            <CardLink href={this.props.event.link} target="_blank">Visit Website</CardLink>
          </Collapse>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser.user
})

export default connect(mapStateToProps, { upvote, downvote, unvote, attendEvent, unAttendEvent, deleteEvent })(DateCard)
