import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../Redux/action";
import Navbar from "./Navbar";

const Login = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const loginAction = userLogin();
    dispatch(loginAction);
    navigate("/");
  };
  const handleLogout = () => {
    const logoutAction = userLogout();
    dispatch(logoutAction);
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      {isAuth ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
};

export default Login;
