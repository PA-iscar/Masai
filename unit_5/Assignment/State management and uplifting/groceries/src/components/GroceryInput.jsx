import React, { useState } from "react";
import GroceryList from "./GroceryList";
import Style from "../CSS/mBottom.module.css";

const GroceryInput = () => {
  const [item, setItem] = useState("");
  let [list, setList] = useState([]);
  let maintainChange = (e) => {
    const { value } = e.target;
    setItem(value);
  };
  let addItem = () => {
    let newItem = [...list, item];
    setList(newItem);
  };
  return (
    <>
      <div>
        <input
          value={item}
          type="text"
          placeholder="Add an Item"
          onChange={maintainChange}
        />
        <button className={Style.mBottom} onClick={addItem}>
          Add
        </button>
      </div>
      <GroceryList value = {list} />
    </>
  );
};

export default GroceryInput;
