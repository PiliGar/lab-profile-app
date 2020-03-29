import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../public/styles/App.css";
import { HomePage } from "./components/pages/HomePage/index";
import { SignUpPage } from "./components/pages/SignUpPage/index";
import { LoginPage } from "./components/pages/LoginPage/index";
import { ProfilePage } from "./components/pages/ProfilePage/index";

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </Switch>
      </Router>
    </>
  );
};
