import React, { Component } from "react";
import BKVid from "../../components/BKVid";

class LandingPage extends Component {

  render() {

    return (
      <div className="grid-x">

        <h4></h4>
        <BKVid />
          <div className="about">
            <div className="row">
              <div className="large-12 columns">

                <h3> About <a name="about"> Over-Reacted Events  </a></h3>
                Happy Outings, Start Here!

              </div>
            </div>
        </div>

        <div className="info">
          <div className="row">
            <div className="large-12 columns">

              <h4></h4>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
