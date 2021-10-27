import React from "react";
import ReactDOM from "react-dom";

import HeaderWidget from "./Header";
import DogWidget from "./DogWidget";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <HeaderWidget />
    <br />
    <div className="container">
      <DogWidget />
      <br />
      <h2>REMOTE</h2>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
