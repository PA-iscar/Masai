import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import SettingsPage from "../Pages/SettingsPage";
import Dashboard from "./Dashboard";

const PrivateRoutes = () => {
    const {isAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth){
            navigate('/login')
        }
    },[isAuth,navigate])
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
