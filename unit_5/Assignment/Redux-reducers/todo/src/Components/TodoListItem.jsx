import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeTodo, toggleStatus } from "../Redux/todo/todo.actions";
import { editData, removeData } from "./DataApi";

const TodoListItem = ({ item }) => {
  const { id, title, status } = item;
  const [localStatus, setLocalStatus] = useState(status);
  const dispatch = useDispatch();

  let path = `/todo/${id}`;

  const handleChange = () => {
    setLocalStatus((prev) => {
      const payload = {
        id,
        title,
        status: !prev,
      };
      editData(payload);
      console.log(id);
      const toggleStatusAction = toggleStatus(id);
      dispatch(toggleStatusAction);
      return !prev;
    });
  };

  const handleDelete = (e) => {
    e.target.parentNode.remove();
    const removeTodoAction = removeTodo(id);
    dispatch(removeTodoAction);
    removeData(id);
  };
  return (
    <div style={{ margin: "10px 0px" }} id={id}>
      <input
        type="checkbox"
        onChange={handleChange}
        name="status"
        id="Status"
        checked={localStatus}
      />
      &nbsp;
      <Link to={path}>
        <span>{title}</span>
      </Link>
      &nbsp;
      <button onClick={handleDelete}>Delete</button>
      <Link to={`${path}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default TodoListItem;
