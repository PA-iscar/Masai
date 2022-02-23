import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../Components/PrivateRoutes";
import Home from "./HomePage";
import LoginPage from "./LoginPage";

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default Rout;
