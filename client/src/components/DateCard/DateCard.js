import React, { Component } from "react";
import './DateCard.css';
import { Row, Col, Card, Button, CardLink, CardSubtitle, CardHeader, CardFooter, CardBody, CardTitle, CardText, Collapse } from 'reactstrap';
import Ionicon from 'react-ionicons'

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
    return (
    <div>
       {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
      <Card>
        <CardBody>
            Expanded Event Info
        </CardBody>
      </Card>
      </Collapse>*/}

      <Card>
        <CardText className="eventName text-left" onClick={this.toggle} >Event Title</CardText>
        <CardText> 
            <Col>
            <Row tag="p">
        <div className="userName" >Added by:.....   |</div> 
        <div className="eventDate">Date:       |</div> 
        <CardLink href="#"> Event Type </CardLink>
            </Row>
            </Col>
        </CardText>
        <CardText>
        <Collapse isOpen={this.state.collapse}>
          <CardText>Event description...fun fun fun blah blah blah and all the good stuf that makes you come out of the house.</CardText>
            <Ionicon icon="ion-chevron-up" fontSize="15px" color="grey"></Ionicon>
            <Ionicon icon="ion-chevron-down" fontSize="15px" color="grey"></Ionicon>
           </Collapse>
        </CardText>
        {/*<CardFooter>
            <CardLink href="#"> Event Category </CardLink>
            <div className="userName"> Added by: </div> <div className="eventDate">Date: </div> 
         </CardFooter>*/}
      </Card>
    </div>
    );
  }
}

export default DateCard;