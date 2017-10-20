import React, { Component } from "react";
import './Event.css';
import {Panel, Glyphicon, Calendar} from 'react-bootstrap';

{/*const panelInstance = (
  <Panel onClick={ handleClick }>
    Basic panel example
  </Panel>
);*/}

class panelInstance extends Component {

handleClick = () => {
   alert('Expanded Event Info');
}

render() {

return (

<Panel onClick={ this.handleClick}>
            <div className="event-block" >
                    <h3>Test Event</h3>
                <div className="events">
                    <div className="event">
                        <div className='upvote-container pull-left'>
                        </div>
                    <div className='meta-container pull-left'>
                        <a className='event-name' />
                        <span className="event-info">Date</span>
                    </div>
                    <div className="reminder-container"></div>
                    <div className="calendar-container">
                        <i className="glyphicon" glyph="calendar"></i>
                    </div>
            <div className='clearfix'></div>
                </div>
            </div>
        </div>
</Panel>

    )
  }
}

export default panelInstance;