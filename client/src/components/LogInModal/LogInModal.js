import React, { Component } from "react";
import { Link } from "react-router-dom";
import './LogInModal.css';

const LogInModal = () =>
  <div id="LogInModal" className="reveal-modal">

    <div className="login-box">
      <div className="row collapse expanded">
        <div className="small-12 medium-6 column small-order-2 medium-order-1">
          <div className="login-box-form-section">
            <h1 className="login-box-title">Sign up</h1>
            <input className="login-box-input" type="text" name="username" placeholder="Username" />
            <input className="login-box-input" type="email" name="email" placeholder="E-mail" />
            <input className="login-box-input" type="password" name="password" placeholder="Password" />
            <input className="login-box-input" type="password" name="password2" placeholder="Retype password" />
            <input className="login-box-submit-button" type="submit" name="signup_submit" value="Sign me up" />
          </div>
          <div className="or">OR</div>
        </div>
        <div className="small-12 medium-6 column small-order-1 medium-order-2 login-box-social-section">
          <div className="login-box-social-section-inner">
            <span className="login-box-social-headline">Sign in with<br />your social network</span>
            <a className="login-box-social-button-facebook">Log in with facebook</a>
            <a className="login-box-social-button-twitter">Log in with Twitter</a>
            <a className="login-box-social-button-google">Log in with Google+</a>
          </div>
        </div>
      </div>
    </div>

  </div>

export default LogInModal;
