import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.css";
const App = () => (
  <div>
    <Header />
    <div className="container">REMOTE</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
