import React from 'react'
import { connect } from 'react-redux'


class eventPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>{this.props.event.name}</h1>
        <h2>{this.props.event.description}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  event: state.events
  user: state.authUser.user ? state.authUser.user : undefined
}

export default connect(mapStateToProps)(eventPage)