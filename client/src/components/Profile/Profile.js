import React, { Component } from "react";
import Avatar from 'react-avatar';
import { connect } from 'react-redux'
import './Profile.css';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';



class Profile extends Component {
  constructor(props) {
    super(props);
  }

  fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  }

  render() {
    return (
      <Card className="profileCard" key={this.props.user._id} >
        <Avatar
          name={this.fullName(this.props.user.profile.firstName, this.props.user.profile.lastName)}
          fgColor="rgba(245, 245, 245, 0.7)"
          color="#841983"
          size={150}
          textSizeRatio={2.25} />
        <CardBody>
        <CardTitle
          className="userName text-center">
          {this.props.user.username}
          </CardTitle>
          <hr />
            <CardText className="userLikes">
              Likes:
              {this.props.user.userlikes}
            </CardText>
            <CardText className="eventsInput">Events:<span className="text-success">#{this.props.user.createdEvents.length}</span></CardText>
            <CardText className="attendingEvents">
              Upcoming Events:
              {this.props.user.attendingEvents}
            </CardText>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser.user ? state.authUser.user : {}
})
export default connect(mapStateToProps)(Profile)
