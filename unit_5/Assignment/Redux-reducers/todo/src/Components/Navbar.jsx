import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      &nbsp; &nbsp;
      <Link to="/login">LOGIN</Link>
    </>
  );
};

export default Navbar;
