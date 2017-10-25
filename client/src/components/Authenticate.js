import React from 'react';
import { getAuthUser } from '../actions/authActions';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default (ComposedComponent) => {
  class Authenticate extends React.Component {

    componentWillMount = () => {
      this.checkAuth(this.props.authenticated);
    }

    componentWillUpdate = (nextProps) => {
      if (nextProps.authenticated !== this.props.authenticated) {
        this.checkAuth(nextProps.authenticated)
      }
    }

    checkAuth = (isAuthed) => {
      if (!isAuthed) {
        // If the user isn't authenticated, redirect to login
        return this.props.history.push('/');
      }
      else {
        return this.props.getAuthUser();
      }
    }

    // Render component that is passed into this
    render() {
      return(
        <ComposedComponent {...this.props}/>
      )
    }
  }

  const mapStateToProps = ( state ) => ({ 
    authenticated: state.authUser.isAuthenticated,
    user: state.authUser.user
  });
  
  return withRouter(connect(mapStateToProps, { getAuthUser })(Authenticate));
}

