import React from "react";
import Style from "../CSS/mBottom.module.css";

const GroceryList = (props) => {
    const {mBottom} = Style
  const { value } = props;

  let removeItem = (e) => {
    e.target.parentNode.remove()
  }

  return (
    <>
      <div className={mBottom}>GroceryList</div>
      <div>
        {value.map((el,i) => {
          return (
            <div className={mBottom} id={i}>
              <span>{el}</span>
              <button onClick={removeItem}>Delete</button>
              <br />
            </div>
          
        )})}
      </div>
    </>
  );
};

export default GroceryList;
