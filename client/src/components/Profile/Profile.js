import React, { Component } from "react";
import './Profile.css';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Card className="profileCard">
        <CardImg className="userImg" src="https://support.plymouth.edu/kb_images/Yammer/default.jpeg" alt="Profile Image" />
        <CardBody>
        <CardTitle className="userName text-center">User Name</CardTitle>
        <CardText >
        <div className="userVotes" >Votes:<span className="text-success">#</span></div>
        <div className="eventsInput">Events:<span className="text-success">#</span></div>
        </CardText>
         </CardBody>
      </Card>
    </div>
    );
  }
}

export default Profile;
