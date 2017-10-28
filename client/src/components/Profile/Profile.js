import React, { Component } from "react";
import { connect } from 'react-redux'
import './Profile.css';
import Img from './Profile.png' 
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';



class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Card className="profileCard" key={this.props.user._id} >
        <CardImg 
          className="userImg text-center" 
          src="https://support.plymouth.edu/kb_images/Yammer/default.jpeg" 
          alt="Profile Image" 
          />
        <CardBody>
        <CardTitle 
          className="userName text-center">
          User Name
          {this.props.user.username}
          </CardTitle>
          <hr />
          <CardText >
            <div className="userLikes">
              Likes: 
              {this.props.user.userlikes}
            </div>
            <div className="createdEvents">
              Events Created:
              {/* {this.props.user.createdEvents}*/}
            </div>
            <div className="attendingEvents">
              Upcoming Events: 
              {this.props.user.attendingEvents}
            </div>            
          </CardText>
         </CardBody>
    </Card>
    );
  }
}

      <Card className="profileCard">
        <CardImg className="userImg" src={Img} alt="Profile Image" />
        <CardBody>
          <CardTitle className="userName text-center">{this.props.user.username}</CardTitle>
          <CardText className="userVotes" >Votes:<span className="text-success">#</span></CardText>
          <CardText className="eventsInput">Events:<span className="text-success">#{this.props.user.createdEvents.length}</span></CardText>
        </CardBody>
      </Card>
const mapStateToProps = state => ({
  user: state.authUser.user
})
export default connect(mapStateToProps)(Profile)
