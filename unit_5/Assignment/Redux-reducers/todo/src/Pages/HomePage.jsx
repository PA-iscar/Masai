import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import Total from "../Components/Total";

const HomePage = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return (
    <>
      {isAuth ? (
        <div>
          <Navbar />
          <Total />
          <TodoInput />
          <TodoList />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomePage;
