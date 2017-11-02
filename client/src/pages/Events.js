import React, { Component } from "react";
import { connect } from 'react-redux';
import DateCard from "../components/DateCard";
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
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
    let dates = []
    if (this.props.allEvents) {
      this.props.allEvents.forEach(event => {
        if (dates.indexOf(event.date) === -1) {
          dates.push(event.date)
        }
      })
    }
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
                    onChange={this.onChange}
                    placeholder="Based on name &amp; description"/>
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
              <h4 className="section-title">Sponsored events
              {this.state.showAll ?
                ' (' + this.props.allEvents.filter(event => event.advert).length + ')':
                ' (' + this.props.searchResult.filter(event => event.advert).length + ')'}
              </h4>
              {this.state.showAll ? (
                (this.props.allEvents.length > 0 && this.props.allEvents.filter(event =>
                  event.advert).map(event => (
                    <DateCard
                      card='sponsored'
                      key={event._id}
                      event={event}/>
                  )
                ))
              ) : (
                this.props.searchResult.length > 0 && this.props.searchResult.filter(event =>
                  event.advert).map(event => (
                    <DateCard
                      card='sponsored'
                      key={event._id}
                      event={event}/>
                    )
                ))
              }
              <h4 className="section-subtitle">Other upcoming events
              {this.state.showAll ?
                ' (' + this.props.allEvents.filter(event => !event.advert).length + ')':
                ' (' + this.props.searchResult.filter(event => !event.advert).length + ')'}
              </h4>
              {this.state.showAll ? (
                (this.props.allEvents.length > 0 && this.props.allEvents.filter(event =>
                  !event.advert).map(event => (
                    <DateCard
                      card='non-sponsored'
                      key={event._id}
                      event={event}/>
                    )
                ))
              ) : (
                this.props.searchResult.length > 0 && this.props.searchResult.filter(event =>
                  !event.advert).map(event => (
                    <DateCard
                      card='non-sponsored'
                      key={event._id}
                      event={event}/>
                    )
                ))
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
