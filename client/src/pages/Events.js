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
      genre: ''
    }
  }

  componentDidMount() {
    this.props.getAllEvents()
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  search = (e) => {
    e.preventDefault()
    this.props.search(this.state.search, this.state.genre)

  }

  // {/* this form needs replacing */}
  // <form onSubmit={this.search}>
  //   <label htmlFor='search'>Search</label>
  //   <input name='search' value={this.state.search} onChange={this.onChange} type='text' />
  //   <label htmlFor='genre'>Genre</label>
  //   <input name='genre' value={this.state.genre} onChange={this.onChange} type='text' />
  //   <button>Submit</button>
  // </form>
  // <h4> Search Results </h4>
  // {this.props.searchResult.length > 0 && this.props.searchResult.map(event => (
  //   <DateCard
  //     key={event._id}
  //     event={event}/>
  // ))}

  render() {
    return (
      <Container tag="main">
        <Row>
          {!this.props.allEvents ? (
            <Col xs='12' md='8'>
              <h3>No Events To Display</h3>
            </Col>
          ) : (
            <Col xs="12" md="8">
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
                    className="button-primary btn-search">
                    Search
                  </Button>
                  <Button
                    type="button"
                    className="button-primary">
                    Show All
                  </Button>
                </FormGroup>
              </AvForm>
              <h4 className="section-title">Upcoming events...</h4>
              <p>{this.state.search}</p>
              <p>{this.state.genre}</p>
              {this.props.searchResult.map(event => (
                <DateCard
                  key={event._id}
                  event={event}/>
              ))}
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

const mapDispatchToProps = dispatch => ({
  getAllEvents() {
    dispatch(getAllEvents())
  }
})

const mapStateToProps = state => ({
  searchResult: state.events.searchResult,
  allEvents: state.events.events,
  user: state.authUser.user
})

export default connect(mapStateToProps, { getAllEvents, search })(Events)
