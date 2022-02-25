import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.total);
  const completed = useSelector((state) => state.completed);
  const remaining = total - completed;
  return (
    <div style={{ position: "absolute", right: "40px" }}>
      <div>Remaining: {remaining}</div>
    </div>
  );
};

export default Total;
