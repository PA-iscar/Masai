import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { ListItemPage } from "./ListItemPage";
import EditListItem from "./EditListItem";
import ErrorPage from "./ErrorPage";
const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/todo/:id" element={<ListItemPage />} />
        <Route exact path="/todo/:id/edit" element={<EditListItem />} />
        <Route exact path="/todo/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Rout;
