import React, { Component } from "react";
import './Profile.css';
import Img from './Profile.png' 
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Card className="profileCard">
        <CardImg className="userImg" src={Img} alt="Profile Image" />
        <CardBody>
          <CardTitle className="userName text-center">{this.props.user.username}</CardTitle>
          <CardText className="userVotes" >Votes:<span className="text-success">#</span></CardText>
          <CardText className="eventsInput">Events:<span className="text-success">#{this.props.user.createdEvents.length}</span></CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default Profile;
