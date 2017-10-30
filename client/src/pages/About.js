import React, { Component } from "react";
import { connect } from 'react-redux'
import Carousel from "../components/Carousel";
import Info from "../components/Info";
import JoinBtn from "../components/JoinBtn";

class About extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <main>
        <Carousel />
        <Info />
        {!this.props.user ? (
          <JoinBtn />
        ) : (
          ''
        )}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser ? state.authUser.user : undefined
});

export default connect(mapStateToProps)(About);
