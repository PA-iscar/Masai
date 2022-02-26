import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import { ListItemPage } from "./ListItemPage";
import EditListItem from "./EditListItem";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";
const Rout = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return (
    <>
      <Routes>
        {isAuth ? (
          <>
            <Route exact path="/todo/:id" element={<ListItemPage />} />
            <Route exact path="/todo/:id/edit" element={<EditListItem />} />
            <Route exact path="/todo/error" element={<ErrorPage />} />
          </>
        ) : (
          <></>
        )}
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default Rout;
