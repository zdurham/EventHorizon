import React, { Component } from "react";
import { connect } from 'react-redux'
import './Profile.css';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userEventLikes = 0
    let userLikes = this.props.user.userLikes.length
    
    this.props.userEvents.forEach(event => {
      userEventLikes += event.vote.positive.length
    })
    userLikes = userEventLikes
    

    
    return (
      <Card className="profile-card" key={this.props.user._id} >
        <CardImg
          className="text-center"
          src={this.props.user.profilePicUrl}
          alt="Profile Image"
        />
        <CardBody className="profile-body">
          <CardTitle
            className="text-center"
            >
            {this.props.user.username}
          </CardTitle>
          <hr className="line-style"/>
          {!this.props.user.isAdvertiser ? (
            <CardText>
              Events Attending
              <span className="card-stats">- {this.props.user.attendingEvents.length} -</span>
            </CardText>
          ) : (
            null
          )}
          <CardText>
            Events Added
            <span className="card-stats">- {this.props.user.createdEvents.length} -</span>
          </CardText>
          <CardText>
            Total Event Likes
            <span className="card-stats">- {userLikes} -</span>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser ? state.authUser.user : {},
  userEvents: state.events.userEvents
});

export default connect(mapStateToProps)(Profile);
