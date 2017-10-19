import React, { Component } from "react";
import Event from "../../components/Event";

class Events extends Component {

  render() {

    return (

<div className="container">
    <div className="row">
        <div className="col-sm-8">
              <Event />
        </div>
    </div>
</div>
    )
  }
}
export default Events;