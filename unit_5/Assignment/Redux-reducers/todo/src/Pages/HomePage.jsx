import React from "react";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import Total from "../Components/Total";

const HomePage = () => {
  return (
    <>
      <Total />
      <TodoInput />
      <TodoList />
    </>
  );
};

export default HomePage;
