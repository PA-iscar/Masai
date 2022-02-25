import React from "react";
import { useSelector } from "react-redux";
import Load from "./LoadList";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  Load();
  return (
    <>
      {/* <Load /> */}
      <div style={{ marginTop: "20px" }}>
        {todos.map((item) => {
          return <TodoListItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export { TodoList };
