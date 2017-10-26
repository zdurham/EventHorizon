import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import './DateCard.css';
import { Row, Col, Card, CardLink, CardTitle, CardText, Collapse } from 'reactstrap';

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

      <Card body className="eventCard">
        <CardTitle className="eventName text-left" onClick={this.toggle}>Event Name</CardTitle>
        <CardText >
        <div className="userName" >Added by:</div>
        <div className="eventDate">Date: </div>
        </CardText>
        <CardText>
        <Collapse isOpen={this.state.collapse}>
          <CardText>Event description...fun fun fun blah blah blah and all the good stuf that makes you come out of the house.</CardText>
            <FontAwesome className="up-vote" name="thumbs-o-up" size="2x" color="gray"></FontAwesome>
            <FontAwesome className="down-vote" name="thumbs-o-down" size="2x" color="gray"></FontAwesome>
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
