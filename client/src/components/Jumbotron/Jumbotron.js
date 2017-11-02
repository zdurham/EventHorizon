import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Jumbotron.css';
import { Jumbotron, Button, Container } from 'reactstrap';
import JoinBtn from "../../components/JoinBtn";
import { withRouter } from 'react-router';

class JumboPanel extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    window.scrollTo(0, 0)
    return this.props.history.push('/dashboard');
  }

  render() {
    return (
      <Jumbotron>
        <Container className="jumbo-overlay">
          <h2>Events...</h2>
          <hr />
          <p className="lead">Whether you're looking for a performance, to connect with others in your profession, or to just get outdoors...</p>
          <p>WE'VE GOT YOU COVERED!</p>
          {!this.props.user ? (
            <JoinBtn />
          ) : (
            <Button
              className="button-primary"
              onClick={this.handleOnClick}>
              View Dashboard
            </Button>
          )}
        </Container>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser ? state.authUser.user : undefined
});

export default withRouter(connect(mapStateToProps)(JumboPanel));
