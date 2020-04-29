import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavStyles";

const HomePage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <h1>Marketing Home Page will go here with a link to the login page</h1>
      <Link to="/login">
        <button>Login Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
