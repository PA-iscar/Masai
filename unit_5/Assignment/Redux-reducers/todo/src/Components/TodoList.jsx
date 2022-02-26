import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Load from "./LoadList";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (todos) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [loading, todos]);
  Load();
  return (
    <>
      {/* <Load /> */}
      {loading ? (
        <h2>...Loading</h2>
      ) : (
        <div style={{ marginTop: "20px" }}>
          {todos.map((item) => {
            return <TodoListItem key={item.id} item={item} />;
          })}
        </div>
      )}
    </>
  );
};

export { TodoList };
