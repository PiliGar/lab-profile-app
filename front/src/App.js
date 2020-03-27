import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../public/styles/App.css";
import { HomePage } from "./components/HomePage/index";
import { SignUp } from "./components/SignUp/index";
import { Login } from "./components/Login/index";

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
};
