import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuth, toggleAuth, onLogin, onLogout } = useContext(AuthContext);
  return (
    <>
      <div>Navbar</div>
      <button
        onClick={() => {
          toggleAuth();
          isAuth ? onLogout() : onLogin();
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </>
  );
};

export default Navbar;
