import React from 'react'
import { connect } from 'react-redux'
import { getUserEvents } from '../actions/eventActions'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    displayEvents(this.props.userId)
  }

  displayEvents = (id) => {
    this.props.getUserEvents(id)
  }

  render() {
    return(
      <div className='container'>
        <h1>Welcome to the Dashboard</h1>
        <h1> Here are your events</h1>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUserEvents() {
    dispatch(getUserEvents())
  }
})

const mapStateToProps = state => {
  events: state.events.Events
}

export default connect(mapStateToProps, { getUserEvents })(Dashboard)