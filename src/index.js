import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import Entery from "./components/Entery";
import HandOver from "./components/HandOver";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/entry" component={Entery} exact />
        <Route path="/handOver" component={HandOver} exact />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
