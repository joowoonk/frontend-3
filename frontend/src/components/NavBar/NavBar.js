import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/userAction";

import NavStyles from "./NavStyles.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const token = localStorage.getItem("token");
  const [local, setLocal] = useState(localStorage);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <NavStyles>
      <h1 className="logo">DEEPTUNES</h1>
      <div className="menuNav">
        <Link to="/">Home</Link>
        {localStorage.token ? (
          <Link to="/" onClick={handleLogOut}>
            Log Out
          </Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </NavStyles>
  );
};

export default NavBar;
