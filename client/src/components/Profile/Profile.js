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
          src={Img} 
          alt="Profile Image" 
          />
        <CardBody>
        <CardTitle 
          className="text-center userName"
          >
          User Name {/*Placeholder*/}
          {this.props.user.userName}
          </CardTitle>
          <hr />
            <CardText className="userLikes">
              Likes: 
              {this.props.user.userlikes}
            </CardText>
            <CardText 
              className="eventsInput">
              Events:
              {this.props.user.createdEvents.length}
            </CardText>
            <CardText 
              className="attendingEvents">
              Upcoming Events: 
              {this.props.user.attendingEvents.length}
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
