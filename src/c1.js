import React from "react";
import "./c1.css";

function C1() {
  return (
    <div className="c1">
      <span class="login100-form-title p-b-43">Login to continue</span>

      <div class="wrap-input100 validate-input">
        <input class="input100" type="text" name="email" />
        <span class="label-input100">Email</span>
      </div>

      <div
        class="wrap-input100 validate-input"
        data-validate="Password is required"
      >
        <input class="input100" type="password" name="pass" />
        <span class="label-input100">Password</span>
      </div>
    </div>
  );
}

export default C1;
