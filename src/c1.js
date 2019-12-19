import React from "react";
import "./c1.css";

function C1(props) {
  return (
    <div className="c1">
      <span className="login100-form-title p-b-43">Login to continue</span>
            
      <div className="wrap-input100 validate-input">
        <input className="input100" type="text" name="email" />
        <span className="label-input100">Email</span>
      </div>

      <div
        className="wrap-input100 validate-input"
        data-validate="Password is required"
      >
        <input className="input100" type="password" name="pass" />
        <span className="label-input100 {props}">Password</span>
      </div>
    </div>
  );
}

export default C1;
