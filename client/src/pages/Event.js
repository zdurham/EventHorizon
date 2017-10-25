import React from 'react'
import { connect } from 'react-redux'

class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <h1> Event goes here </h1>

    )
  }
}

export default connect(mapStateToProps)(Event)