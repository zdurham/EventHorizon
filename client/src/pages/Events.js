import React, { Component } from "react";
import { connect } from 'react-redux';
import DateCard from "../components/DateCard";
import TopEvents from "../components/TopEvents";
import { AvForm, AvGroup, AvField, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Container, Row, Col, Label, FormGroup, Button } from 'reactstrap';
import { getAllEvents, search } from '../actions/eventActions';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      genre: '',
      showAll: true,
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
    this.props.search(this.state.search, this.state.genre, this.props.allEvents)
  }
  search = (e) => {
    e.preventDefault()
    this.props.search(this.state.search, this.state.genre)
  }

  toggleEvents = (e) => {
    this.setState({
      showAll: true,
      search: '',
      genre: '',
    })
  }

  
    

  render() {
    let dates = []
    if (this.props.allEvents) {
      this.props.allEvents.forEach(event => {
        if (dates.indexOf(event.date) === -1) {
          dates.push(event.date)
        }
      })
    }
    console.log(dates)
  
    
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
                  <Label for="search-term">Search Term</Label>
                  <AvInput
                    type="text"
                    name="search"
                    id="search-term"
                    value={this.state.search}
                    onChange={this.onChange}
                    required />
                  <AvFeedback>This field is required</AvFeedback>
                </AvGroup>
                <AvField
                  type="select"
                  name="genre"
                  value={this.state.genre}
                  onChange={this.onChange}
                  label="Category"
                  required>
                  <option value="NA" disabled>Select Category</option>
                  <option value="Arts">Arts</option>
                  <option value="Concerts">Concerts</option>
                  <option value="Community">Community</option>
                  <option value="Festival">Festival</option>
                  <option value="Outdoors">Outdoors</option>
                  <option value="Social">Social</option>
                  <option value="Sports">Sports</option>
                </AvField>
                <FormGroup>
                  <Button
                    type="button"
                    className="button-primary"
                    onClick={() => this.toggleEvents()}
                    >
                    Show All
                  </Button>
                </FormGroup>
              </AvForm>
              <h4 className="section-title">Upcoming events...</h4>

              {dates.map(date => {
                return(
                  <div>
                    <h4>{date}</h4>
                    <hr/>
                    <div>
                      <h5>Pinned Events</h5>
                        {this.props.allEvents.map(event => {
                          if (event.date === date && event.createdBy.isAdvertiser === true) {
                            return (
                              <DateCard key={event._id} event={event}/>
                            )
                          }
                        })}
                      <hr/>
                    </div>
                    <div>
                      <h5>Events</h5>
                      {this.props.allEvents.map(event => {
                        if (event.date === date && event.createdBy.isAdvertiser === false) {
                          return (
                            <DateCard key={event._id} event={event}/>
                          )
                        }
                      })}
                    </div>
                  </div>
                )
              })}
              {/*this.state.showAll ? (
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
              */}
            </Col>
          )}
          <Col lg="auto">
          </Col>
        </Row>
        <Row>
          <Col lg="auto">
            <TopEvents />
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
