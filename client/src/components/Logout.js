// This file only exists at the moment to provide an area to test the logout route.
// It can be deleted when a dynamic logout button is added to the navbar

import React from 'react'
import { logoutUser, getAuthUser } from '../actions/authActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 

class Logout extends React.Component {
  
  onSubmit = e => {
    this.props.logoutUser()
  }
 
  // check storage
  check = () => {
    this.props.getAuthUser()
  }

  render() {
    return(
      <div>
        <button onClick={this.check}>
          Check Local Storage
        </button>
        <button onClick={this.onSubmit} className='btn btn-primary'>
          Logout
        </button>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
      ...bindActionCreators({ logoutUser, getAuthUser }, dispatch)
  }
}

export default connect(null, { logoutUser, getAuthUser })(Logout)