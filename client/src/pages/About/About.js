import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import Info from "../../components/Info";
import JoinBtn from "../../components/JoinBtn";

class About extends Component {

  render() {

    return (
      <main>
        <Carousel />
        <Info />
        <JoinBtn />
      </main>
    );
  }
}

export default About;
