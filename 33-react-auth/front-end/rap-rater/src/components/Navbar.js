import React from "react";
import { Link, withRouter } from "react-router-dom";
const Navbar = props => {
  return (
    <ul>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/rappers">
        <li>Rappers</li>
      </Link>
      <Link to="/signup">
        <li>Sign Up</li>
      </Link>
      <Link to="/login">
        <li>Log In</li>
      </Link>
      <li
        onClick={(e) => props.handleLogout()}
      >
        Log Out
      </li>
    </ul>
  );
};

export default withRouter(Navbar);
