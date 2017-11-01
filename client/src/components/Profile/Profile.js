import React, { Component } from "react";
import { connect } from 'react-redux'
import './Profile.css';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <CardText>
            Events Attending
            <span className="card-stats">- {!this.props.user.attendingEvents ? 0 : this.props.user.attendingEvents.length} -</span>
          </CardText>
          <CardText>
            Events Added
            <span className="card-stats">- {!this.props.user.createdEvents ? 0 : this.props.user.createdEvents.length} -</span>
          </CardText>
          <CardText>
            User Likes
            <span className="card-stats">- {!this.props.user.userLikes ? 0 : this.props.user.userLikes.length} -</span>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser.user ? state.authUser.user : {}
});

export default connect(mapStateToProps)(Profile);
