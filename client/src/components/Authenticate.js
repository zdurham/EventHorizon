import React from 'react';
import { getAuthUser } from '../actions/authActions';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default (ComposedComponent) => {
  class Authenticate extends React.Component {

    componentDidMount = () => {
      // this.props.getAuthUser();
      this.checkAuth(this.props.authenticated);
    }

    checkAuth = (isAuthed) => {
      if (!isAuthed) {
        // If the user isn't authenticated, redirect to login
        return this.props.history.push('/login');
      }
      else {
        return this.props.getAuthUser();
      }
    }

    // Render component that is passed into this
    render() {
      return(
        <ComposedComponent />
      )
    }
  }

  const mapStateToProps = ( state ) => ({ 
    authenticated: state.authUser.isAuthenticated
  });
  
  return withRouter(connect(mapStateToProps, { getAuthUser })(Authenticate));
}

