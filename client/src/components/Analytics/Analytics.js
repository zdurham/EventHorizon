import React, { Component } from 'react';
import './Analytics.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Pie, defaults } from 'react-chartjs-2';
import { getUserEvents } from '../../actions/eventActions';
import moment from 'moment';

// Chart default values
defaults.global.defaultFontColor = '#212529';
defaults.global.defaultFontFamily = "'Quicksand', sans-serif";

const sort_by = (field, reverse, primer) => {

  let key = primer ?
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
      chartData: {},
      rSelected: 'sex'
    };
  }

  componentDidMount = () => {
    this.props.getUserEvents(this.props.user._id);
    let attendingArray;
    if (this.props.userEvents) {
      attendingArray = this.props.userEvents[0].attendingList;
      this.setState({
        eventData: attendingArray
      },
      this.collectChartData(this.state.rSelected, attendingArray)
      )
    }
  }

  onRadioBtnClick = (rSelected) => {
    this.setState({ rSelected });
    this.collectChartData(rSelected);
  }


  onChange = (e) => {
    let attendingArray;
    this.props.userEvents.forEach(event => {
      if (event._id === e.target.value) {
        attendingArray = event.attendingList;
      }
    })
    this.setState({
      eventSelected: e.target.value,
      eventData: attendingArray
    }, this.collectChartData(this.state.rSelected, attendingArray))
  }

  collectChartData = (param, eventData) => {
    const labels = [];
    const data = [];
    let prev = '';
    let unfilteredArray = eventData || this.state.eventData;
    let arr = [];
    unfilteredArray.forEach(function(user) {
      if (param in user) {
        arr.push(user);
      }
    })

    if (param === 'age') {
      arr = arr.sort(sort_by(param, false, parseInt));
    } else if (param === 'hasChildren') {
      arr.sort(sort_by(param, true));
    } else {
      arr = arr.sort(sort_by(param, false, function(a){return a.toUpperCase()}));
    }

    if (param === 'age') {
      for ( let i = 0; i < arr.length; i++ ) {
          if ( '18 and under' !== prev && arr[i][param] < 19) {
            labels.push('18 and under');
            data.push(1);
            prev = '18 and under';
          } else {
            data[data.length - 1]++;
          }

          if ( '19-29' !== prev && arr[i][param] < 30 && arr[i][param] > 18) {
            labels.push('19-29');
            data.push(1);
            prev = '19-29';
          } else {
            data[data.length - 1]++;
          }

          if ( '30-39' !== prev && arr[i][param] < 40 && arr[i][param] > 29) {
            labels.push('30-39');
            data.push(1);
            prev = '30-39';
          } else {
            data[data.length - 1]++;
          }

          if ( '40-49' !== prev && arr[i][param] < 50 && arr[i][param] > 39) {
            labels.push('40-49');
            data.push(1);
            prev = '40-49';
          } else {
            data[data.length - 1]++;
          }

          if ( '50-64' !== prev && arr[i][param] < 65 && arr[i][param] > 49) {
            labels.push('50-64');
            data.push(1);
            prev = '60-64';
          } else {
            data[data.length - 1]++;
          }

          if ( '65 and over' !== prev && arr[i][param] > 64) {
            labels.push('65 and over');
            data.push(1);
            prev = '65 and over';
          } else {
            data[data.length - 1]++;
          }

      }
    } else {
      for ( let i = 0; i < arr.length; i++ ) {
          if ( arr[i][param] !== prev ) {
            labels.push(arr[i][param]);
            data.push(1);
          } else {
            data[data.length - 1]++;
          }
          prev = arr[i][param];
      }
      if (labels[0] === true) {
        labels[0] = 'Yes';
        labels[1] = 'No';
      } else if (labels[0] === false) {
        labels[0] = 'No';
        labels[1] = 'Yes';
      }
    }

    this.setState({
      chartData: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgba(62, 63, 106, 0.85)',
            'rgba(47, 123, 153, 0.85)',
            'rgba(29, 185, 172, 0.85)',
            'rgba(92, 198, 135, 0.85)',
            'rgba(174, 210, 100, 0.85)',
            'rgba(236, 219, 95, 0.85)',
            'rgba(254, 193, 46, 0.85)',
            'rgba(253, 140, 48, 0.85)',
          ],
          hoverBackgroundColor: [
            'rgb(62, 63, 106)',
            'rgb(47, 123, 153)',
            'rgb(29, 185, 172)',
            'rgb(92, 198, 135)',
            'rgb(174, 210, 100)',
            'rgb(236, 219, 95)',
            'rgb(254, 193, 46)',
            'rgb(253, 140, 48)',
          ]
        }]
      }
    })
  }

  render() {
    // Pie chart options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          fontSize: 14
        }
      },
      tooltips: {
        bodyFontSize: 14,
        bodyFontColor: '#f5f5f5'
      }
    };
    return (
      <div className="analytics-container">
        <h4>Demographics</h4>
        <Form>
          <FormGroup>
            <Label for="evt-select">Select Event</Label>
            <Input onChange={this.onChange}  type="select" id="evt-select">
              {(!this.props.userEvents || this.props.userEvents.length === 0)? (
                <option>You have no events</option>
              ) : (
                this.props.userEvents.map(event => (
                  <option key={event._id} value={event._id}>
                    {moment(event.date).format('MM/DD/YYYY')} - {event.name}
                  </option>
                )
              )
            )}
            </Input>
          </FormGroup>
        </Form>
        <div className="button-group">
          <Button className="button-primary" size="sm" onClick={() => this.onRadioBtnClick('sex')} active={this.state.rSelected === 'sex'}>Gender</Button>
          <Button className="button-primary" size="sm" onClick={() => this.onRadioBtnClick('age')} active={this.state.rSelected === 'age'}>Age</Button>
          <Button className="button-primary" size="sm" onClick={() => this.onRadioBtnClick('city')} active={this.state.rSelected === 'city'}>Location</Button>
          <Button className="button-primary" size="sm" onClick={() => this.onRadioBtnClick('maritalStatus')} active={this.state.rSelected === 'maritalStatus'}>Status</Button>
          <Button className="button-primary" size="sm" onClick={() => this.onRadioBtnClick('hasChildren')} active={this.state.rSelected === 'hasChildren'}>Parent</Button>
        </div>
        <div className="chart-container" style={{position: 'relative', height: '50vh'}}>
          <Pie
            data={this.state.chartData}
            options={options}
          />
        </div>
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
