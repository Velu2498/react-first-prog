import React from "react";
import "./c2.css";

function C2() {
  return (
    <div className="c2">

      <div className="flex-sb-m w-full p-t-3 p-b-32">
        <div className="contact100-form-checkbox">
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="remember-me"
          />
          <label className="label-checkbox100" htmlFor="ckb1">
            Remember me
          </label>
        </div>

        <div>
          <p  className="txt1">
            Forgot Password?
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default C2;
