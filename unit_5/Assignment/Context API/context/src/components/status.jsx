import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
const Status = () => {
  const { isAuth, token } = useContext(AuthContext);
  return (
    <>
      <h1>Status: {isAuth ? "True" : "False"}</h1>
      <h2>{isAuth ? token : ""}</h2>
    </>
  );
};

export default Status;
