import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () =>
  <header>
    <div className="title-bar" data-responsive-toggle="menu" data-hide-for="medium">
      <button className="menu-icon" type="button" data-toggle="menu"></button>
      <div className="title-bar-title">OverReacted</div>
    </div>

    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">OverReacted</li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/calendar">Calendar</a></li>
          <li><a href="/advertise">Advertise</a></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><a href="/user">My Account</a></li>
          <li><a className="button" href="/logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </header>;

export default Nav;
