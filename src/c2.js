import React from "react";
import "./c2.css";

function C2() {
  return (
    <div className="c2">

      <div class="flex-sb-m w-full p-t-3 p-b-32">
        <div class="contact100-form-checkbox">
          <input
            class="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="remember-me"
          />
          <label class="label-checkbox100" for="ckb1">
            Remember me
          </label>
        </div>

        <div>
          <a  class="txt1">
            Forgot Password?
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default C2;
