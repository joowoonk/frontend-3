import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import LoginPage from "../../pages/LoginPage/LoginPage.js";
import SignUpPage from "../../pages/Registration/SignUpPage";

// import "./App.css";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import UserHomePage from "../../pages/UserHomePage/UserHomePage.js";
import HomePage from "../../pages/HomePage.js";
import Preference from "../Preference/Preference.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <HomePage />
        </Route>

        <Route path="/login">
          <NavBar />
          <LoginPage />
        </Route>

        <Route path="/signup">
          <NavBar />
          <SignUpPage />
        </Route>
        <PrivateRoute path="/usersonglist">
          <NavBar />
          <UserHomePage />
        </PrivateRoute>
        <PrivateRoute path="/preference">
          <NavBar />
          <Preference />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
