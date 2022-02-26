import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";
import { putData } from "./DataApi";
const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = async () => {
    let payload = {
      title,
      status: false,
    };

    payload = await putData(payload);

    const addTodoAction = addTodo(payload);
    if (title) dispatch(addTodoAction);
  };
  return (
    <div>
      <h3>Add Todo</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add Something"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export { TodoInput };
