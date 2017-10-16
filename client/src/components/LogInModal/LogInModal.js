import React from "react";
import './LogInModal.css';

const LogInModal = (props) => {
  return (
    <div className="login-box-form-section">

      <h1 className="login-box-title">Log In</h1>

      <input
        className="login-box-input"
        type="text"
        name="username"
        placeholder="Username"
        value={props.username}
        onChange={props.handleInputChange}
      />
      <input
        className="login-box-input"
        type="password"
        name="password"
        placeholder="Password"
        value={props.password}
        onChange={props.handleInputChange}
      />
      <input className="login-box-submit-button" type="submit" name="login_submit" value="Log In" />
    </div>
  )
}
export default LogInModal;
