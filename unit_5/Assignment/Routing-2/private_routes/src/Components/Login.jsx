import React, { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const { isAuth, onLogin, onLogout } = useContext(AuthContext);
  useEffect(() => {
    
  },[isAuth])
  return <button onClick={isAuth ? onLogout : onLogin}>{isAuth ? "Log Out" : "Log In"}</button>;
};

export default Login;
