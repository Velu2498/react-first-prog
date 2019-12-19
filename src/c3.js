import React from "react";
import "./c3.css";

function C3() {
  return (
    <div className="c3">

      <div className="container-login100-form-btn">
        <button className="login100-form-btn">Login</button>
      </div>

      <div className="text-center p-t-46 p-b-20">
        <span className="txt2">or sign up using</span>
      </div>

      <div className="login100-form-social flex-c-m">
        <a  className="login100-form-social-item flex-c-m bg1 m-r-5">
          <i className="fa fa-facebook-f" aria-hidden="true"></i>
        </a>

        <a  className="login100-form-social-item flex-c-m bg2 m-r-5">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      
    </div>
  );
}

export default C3;
