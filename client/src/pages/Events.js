import React, { Component } from "react";
import { connect } from 'react-redux';
import DateCard from "../components/DateCard";
import { AvForm, AvGroup, AvField, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Container, Row, Col, Label, FormGroup, Button } from 'reactstrap';
import { getAllEvents, search } from '../actions/eventActions';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      showAll: true
    }
  }

  componentDidMount() {
    this.props.getAllEvents()
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      showAll: false
    })
    this.props.search(this.state.search, this.props.allEvents)
  }
  search = (e) => {
    e.preventDefault()
    this.props.search(this.state.search)
  }

  toggleEvents = (e) => {
    this.setState({
      showAll: true,
      search: ''
    })
  }

  render() {
    return (
      <Container tag="main">
        <Row>
          {!this.props.allEvents ? (
            <Col xs='12' md='9'>
              <h3>No Events To Display</h3>
            </Col>
          ) : (
            <Col xs="12" md="9">
              <AvForm id="search-form" onSubmit={this.search}>
                <AvGroup>
                  <Label for="search-term">Search for Events</Label>
                  <AvInput
                    type="text"
                    name="search"
                    id="search-term"
                    value={this.state.search}
                    onChange={this.onChange} />
                </AvGroup>
                <FormGroup>
                  <Button
                    type="reset"
                    className="button-primary"
                    onClick={() => this.toggleEvents()}
                    >
                    Show All
                  </Button>
                </FormGroup>
              </AvForm>
              <h4 className="section-title">Upcoming events...</h4>
              {this.state.showAll ? (
                (this.props.allEvents.length > 0 && this.props.allEvents.map(event => (
                  <DateCard
                    key={event._id}
                    event={event}/>
                )))
              ) : (
                this.props.searchResult.length > 0 && this.props.searchResult.map(event => (
                  <DateCard
                    key={event._id}
                    event={event}/>
                )))
              }
            </Col>
          )}
          <Col lg="auto">
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  searchResult: state.events.searchResult,
  allEvents: state.events.events,
  user: state.authUser.user
})

export default connect(mapStateToProps, { getAllEvents, search })(Events)
