import React, { Component } from "react";
import { connect } from 'react-redux';
import DateCard from "../components/DateCard";
import TopEvents from "../components/TopEvents";
import { Container, Row, Col } from 'reactstrap';
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
              {/* this form needs replacing */}
              <form onSubmit={this.search}>
                <label htmlFor='search'>Search</label>
                <input name='search' value={this.state.search} onChange={this.onChange} type='text' />
                <label htmlFor='genre'>Genre</label>
                <input name='genre' value={this.state.genre} onChange={this.onChange} type='text' />
                <button>Submit</button>
              </form>
              <h4> Search Results </h4>
              {this.props.searchResult.length > 0 && this.props.searchResult.map(event => (
                <DateCard
                  key={event._id}
                  event={event}/>
              ))}
              <h4 className="section-title">Upcoming events...</h4>
              {this.props.allEvents.map(event => (
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
