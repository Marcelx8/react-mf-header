import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => (
  <div>
    <Header />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
