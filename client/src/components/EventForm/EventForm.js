import React, { Component } from 'react';
import moment from 'moment';
import './EventForm.css';
import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { connect } from 'react-redux'
import { createEvent } from '../../actions/eventActions'

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.state = {
      name: ''
    }
  }

  handleValidSubmit(event, values) {
    this.setState({values});
    this.props.createEvent(values, this.props.userId)

  }

  render() {
    const yrsOut = 2;
    return(
      <Container>
        <AvForm onValidSubmit={this.handleValidSubmit}>
          <AvGroup>
            <Label for="evt-name">Event Name *</Label>
            <AvInput
              type="text"
              name="name"
              id="evt-name"
              required />
            <AvFeedback>This field is required</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for="evt-genre">Event Type</Label>
            <AvInput
              type="text"
              name="genre"
              id="evt-genre"
              required />
            <AvFeedback>This field is required</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for="evt-desc">Description</Label>
            <AvInput
              type="textarea"
              name="description"
              id="evt-desc"
              required />
            <AvFeedback>This field is required</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for="evt-url">URL (if available)</Label>
            <AvInput
              type="url"
              name="link"
              id="evt-url"
              pattern="https?://.+"
              placeholder="http://www.event.com"/>
          <AvFeedback>This field is invalid.</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for="evt-date">Event Date</Label>
            <AvInput
              type="date"
              name="date"
              id="evt-date"
              validate={{dateRange: {start: {value: 0, units: 'days'}, end: {value: yrsOut, units: 'years'}}}}
              required />
            <AvFeedback>{`Valid dates between ${moment().format('MM/DD/YYYY')} and ${moment().add(yrsOut, 'years').format('MM/DD/YYYY')}.`}</AvFeedback>
          </AvGroup>
          <Row>
            <Col xs="12" sm="6">
              <AvGroup>
                <Label for="evt-start">Start Time</Label>
                <AvInput
                  type="time"
                  name="startTime"
                  id="evt-start"
                  required />
                <AvFeedback>This field is required</AvFeedback>
              </AvGroup>
            </Col>
            <Col xs="12" sm="6">
              <AvGroup>
                <Label for="evt-end">End Time</Label>
                <AvInput
                  type="time"
                  name="endTime"
                  id="evt-end"/>
              </AvGroup>
            </Col>
          </Row>
          <AvGroup>
            <Label check inline>
              <AvInput type="checkbox" name="allDay" />All day event</Label>
          </AvGroup>
          <AvGroup>
            <Label for="evt-loc">Place</Label>
            <AvInput
              type="text"
              name="location"
              id="evt-loc"
              required />
            <AvFeedback>This field is required</AvFeedback>
          </AvGroup>

          <Row>
            <Col xs="12" sm="8">
              <AvGroup>
                <Label for="evt-addr">Street</Label>
                <AvInput
                  type="text"
                  name="address"
                  id="evt-addr"
                  required />
                <AvFeedback>This field is required</AvFeedback>
              </AvGroup>
            </Col>
            <Col xs="12" sm="4">
              <AvField name="suite" label="Suite" />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="5">
              <AvGroup>
                <Label for="evt-city">City</Label>
                <AvInput
                  type="text"
                  name="city"
                  id="evt-city"
                  required />
                  <AvFeedback>This field is required</AvFeedback>
              </AvGroup>
            </Col>
            <Col xs="12" sm="4">
              <AvField type="select" name="state" label="State" required>
                <option value="NA" disabled>Chose State</option>
                <option value="NC">North Carolina</option>
                <option value="SC">South Carolina</option>
                <option value="VA">Virginia</option>
              </AvField>
            </Col>
            <Col xs="12" sm="3">
              <AvField name="zipCode" label="Zip Code" pattern="[0-9]{5}" required />
            </Col>
          </Row>

          <AvGroup>
            <Label check inline>
              <AvInput type="checkbox" name="kidFriendly" />Kid friendly</Label>
          </AvGroup>
          <AvGroup>
            <Label check inline>
              <AvInput type="checkbox" name="petFriendly" />Pet friendly</Label>
          </AvGroup>
          <AvGroup>
            <Label check inline>
              <AvInput type="checkbox" name="advert" />Advertise this event</Label>
          </AvGroup>
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </AvForm>
        {this.state.values && <div>
          <h5>Submission values</h5>
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createEvent() {
    dispatch(createEvent())
  }
})

const mapStateToProps = state => ({
  userId: state.authUser.user._id
})

export default connect(mapStateToProps, { createEvent })(EventForm);
