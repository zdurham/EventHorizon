import React from 'react'
import { loginUser } from '../actions/authActions'
import { connect } from 'react-redux' 

class Logout extends React.Component {
  constructor(props) {
    super(props)
    
  }
  
  onSubmit = e => {
    this.props.loginUser()
  }
 
  render() {
    return(
      <p>Stuff should go here eventually</p>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  loginUser() {
    dispatch(loginUser())
  }
})

export default connect(null, logoutUser)(Logout)