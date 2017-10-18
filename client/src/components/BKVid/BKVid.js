import React, { Component } from "react";
import { Link } from "react-router-dom";
import './BKVid.css';

const BKVid = () =>
<div className="video">
<div className="heropanel--video" data-vide-bg="mp4: https://www.gordonmac.com/wp-content/uploads/storm-1.mp4, poster: https://www.gordonmac.com/wp-content/uploads/storm-1.png" data-vide-options="posterType: png, loop: false, muted: true, position: 50% 50%">
    <div className="heropanel__content">
         <h1>Let's Go!</h1>
         <p>Find Your Next Event</p>
    </div>
 </div>
 </div>;

 export default BKVid;
