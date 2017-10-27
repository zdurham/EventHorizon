import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import './DateCard.css';
import { Button, Card, CardBody, CardLink, CardTitle, CardSubtitle, CardText, Collapse } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux'

class DateCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    console.log('card', this.props);
    return (
      <Card key={this.props.event._id}>
        <CardBody>
          <CardTitle>{this.props.event.name}</CardTitle>
          <CardSubtitle tag="h5">{this.props.event.location}</CardSubtitle>
          <CardText >
            <span>{moment(this.props.event.date).format('dddd, MMMM Do')} - {moment(this.props.event.startTime, 'HH:mm').format('h:mmA')}</span>
          </CardText>
          <div className="card-buttons">
            <Button size="sm" onClick={this.toggle}>More Info</Button>
            <div className="card-votes">
              <div className="card-vote up">
                <FontAwesome onClick={() => this.props.upvote(this.props.event._id, this.props.user)} className="up-vote" name="thumbs-o-up" size="2x" color="gray"></FontAwesome>
                <span>{this.props.event.vote.positive.length}</span>
              </div>
              <div className="card-vote down">
                <FontAwesome onClick={() => this.props.downvote(this.props.event._id, this.props.user)} className="down-vote" name="thumbs-o-down" size="2x" color="gray"></FontAwesome>
                <span>{this.props.event.vote.negative.length}</span>
              </div>
            </div>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <div className="line-container">
              <hr className="line-style" />
            </div>
            <CardText>{this.props.event.description}</CardText>
            <CardLink href={this.props.event.link}>Visit Website</CardLink>
          </Collapse>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser.user,
})

export default connect(mapStateToProps)(DateCard)
