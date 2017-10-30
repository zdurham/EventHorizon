import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Container } from 'reactstrap';
import Carousel from "../components/Carousel";
import Info from "../components/Info";
import JoinBtn from "../components/JoinBtn";
import { withRouter } from 'react-router';

class About extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    window.scrollTo(0, 0)
    return this.props.history.push('/dashboard');
  }

  render() {

    return (
      <main>
        <Carousel />
        <Info />
        {!this.props.user ? (
          <JoinBtn />
        ) : (
          <Container className="text-center">
            <Button
              size="lg"
              className="button-primary"
              onClick={this.handleOnClick}>
              View My Dashboard
            </Button>
          </Container>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser ? state.authUser.user : undefined
});

// export default connect(mapStateToProps)(About);

export default withRouter(connect(mapStateToProps)(About));
