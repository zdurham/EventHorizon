import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import {Pie} from 'react-chartjs-2';
import { Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getUserEvents } from '../../actions/eventActions';
import moment from 'moment';

const sort_by = (field, reverse, primer) => {

   var key = primer ?
       function(x) {return primer(x[field])} :
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     }
}


class Analytics extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cSelected: [],
      eventSelected: this.props.userEvents ? this.props.userEvents[0]._id : '',
      eventData: [],
      chartData: {}
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  componentDidMount = () => {
    this.props.getUserEvents(this.props.user._id);
    let attendingArray;
    if (this.props.userEvents) {
      attendingArray = this.props.userEvents[0].attendingList;
      this.setState({
        eventData: attendingArray
        })
    }
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    this.collectChartData(rSelected);
  }


  onChange = (e) => {
    let attendingArray;
    this.props.userEvents.forEach(event => {
      if (event._id === e.target.value) {
        attendingArray = event.attendingList;
      }
    this.setState({
      eventSelected: e.target.value,
      eventData: attendingArray
      })
    })
  }

  collectChartData = (param) => {
    const labels = [];
    const data = [];
    let prev = '';

    let arr = this.state.eventData;
    if (param == 'age') {
      arr = arr.sort(sort_by(param, false, parseInt));
      console.log(arr);
    } else {
      arr = arr.sort(sort_by(param, false, function(a){return a.toUpperCase()}));
    }

    if (param == 'age') {
      for ( var i = 0; i < arr.length; i++ ) {
          if ( '18 and under' !== prev && arr[i][param] < 19) {
              labels.push('18 and under');
              data.push(1);
              prev = '18 and under';
          } else {
              data[data.length-1]++;
          }

          if ( '19-29' !== prev && arr[i][param] < 30 && arr[i][param] > 18) {
              labels.push('19-29');
              data.push(1);
              prev = '19-29';
          } else {
              data[data.length-1]++;
          }

          if ( '30-39' !== prev && arr[i][param] < 40 && arr[i][param] > 29) {
              labels.push('30-39');
              data.push(1);
              prev = '30-39';
          } else {
              data[data.length-1]++;
          }

          if ( '40-49' !== prev && arr[i][param] < 50 && arr[i][param] > 39) {
              labels.push('40-49');
              data.push(1);
              prev = '40-49';
          } else {
              data[data.length-1]++;
          }

          if ( '50-64' !== prev && arr[i][param] < 65 && arr[i][param] > 49) {
              labels.push('50-64');
              data.push(1);
              prev = '60-64';
          } else {
              data[data.length-1]++;
          }

          if ( '65 and over' !== prev && arr[i][param] > 64) {
              labels.push('65 and over');
              data.push(1);
              prev = '65 and over';
          } else {
              data[data.length-1]++;
          }

      }
    } else {
      for ( var i = 0; i < arr.length; i++ ) {
          if ( arr[i][param] !== prev ) {
              labels.push(arr[i][param]);
              data.push(1);
          } else {
              data[data.length-1]++;
          }
          prev = arr[i][param];
      }
    }



    this.setState({
      chartData: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
          '#4D4D4D',
          '#5DA5DA',
          '#FAA43A',
          '#60BD68',
          '#F17CB0',
          '#B2912F',
          '#B276B2',
          '#DECF3F',
          '#F15854',
          '#63E7D8'
          ],
          hoverBackgroundColor: [
            '#4D4D4D',
            '#5DA5DA',
            '#FAA43A',
            '#60BD68',
            '#F17CB0',
            '#B2912F',
            '#B276B2',
            '#DECF3F',
            '#F15854',
            '#63E7D8'
          ]
        }]
      }
    })
  }

  render() {

    return (
      <div>
        <Row>

          <FormGroup>
          <Label for="exampleSelectMulti">Your Events</Label>
          <Input onChange={this.onChange}  type="select" name="selectMulti" id="exampleSelectMulti">
            {(!this.props.userEvents || this.props.userEvents.length === 0)? (
              <option>You have no events</option>
            ) : (
                this.props.userEvents.map(event => (
                  <option value={event._id}>
                    {moment(event.date).format('ddd, MMMM D')} - {event.name}
                  </option>
                )
              )
            )
            }

          </Input>
        </FormGroup>

          <ButtonGroup>
            <Button color="primary" onClick={() => this.onRadioBtnClick('sex')} active={this.state.rSelected === 'sex'}>Gender</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick('age')} active={this.state.rSelected === 'age'}>Age</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick('city')} active={this.state.rSelected === 'city'}>Location</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick('maritalStatus')} active={this.state.rSelected === 'maritalStatus'}>Marital Status</Button>
          </ButtonGroup>
        </Row>
        <Row>
          <Pie data={this.state.chartData} />
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUserEvents(userId) {
    dispatch(getUserEvents(userId))
  }
})

const mapStateToProps = state => ({
  user: state.authUser.user,
  userEvents: state.events.userEvents
})

export default connect(mapStateToProps, { getUserEvents })(Analytics)
