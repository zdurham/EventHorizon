// This file only exists at the moment to provide an area to test the logout route.
// It can be deleted when a dynamic logout button is added to the navbar

import React from 'react'
import { logoutUser } from '../actions/authActions'
import { connect } from 'react-redux' 

class Logout extends React.Component {
  
  onSubmit = e => {
    this.props.logoutUser()
  }
 
  render() {
    return(
      <button onClick={this.onSubmit} className='btn btn-primary'>
        Logout
      </button>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  logoutUser() {
    dispatch(logoutUser())
  }
})

export default connect(null, { logoutUser })(Logout)