import React from "react";
import C1 from "./c1";
import C2 from "./c2";
import C3 from "./c3";
import C4 from "./c4";
import "./App.css";

function App() {
  return (
    <div className="App">

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <C1 />
              <C2></C2>
              <C3></C3>
            </form>
            <C4></C4>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
