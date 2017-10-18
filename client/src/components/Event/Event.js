import React, { Component } from "react";
import './Event.css';
import { panelInstance, Panel } from 'react-bootstrap';

const Event = () =>


<Panel>
            <div className="event-block" >
                    <h3><b></b> Test Event</h3>
                <div className="events">
                    <div className="event">
                        <div className='upvote-container pull-left' data-upvote-component data-upvote-count="1" data-upvoted="false" data-event-id="59c6ce840c3cd009fd0001fe" data-logged-in="false">
                        </div>
                    <div className='meta-container pull-left'>
                        <a className='event-name' />
                        <span className="event-info"></span>
                    </div>
                    <div className="reminder-container"></div>
                    <div className="calendar-container">
                        <i className="glyphicon glyphicon-calendar"></i>
                    </div>
            <div className='clearfix'></div>
                </div>
            </div>
        </div>
    </Panel>

export default Event;