import React from "react";
import './TopEvents.css';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';

const TopEvents = (props) =>  {
  return (
    <div>
      <Card>
        <CardHeader className="text-center" >Top Events</CardHeader>
        <CardBody className="text-center" >
          <CardTitle>RTP Trending</CardTitle>
          <CardText>Event Details <CardLink href="#">link</CardLink></CardText>
          <CardText>Event Details <CardLink href="#">link</CardLink></CardText>
          <Button id="JoinBtn" >Share</Button>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
    );
  };

export default TopEvents;
