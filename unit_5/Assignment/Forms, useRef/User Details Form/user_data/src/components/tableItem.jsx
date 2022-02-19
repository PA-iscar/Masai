import React from "react";
import DataApi from "./dataApi";

const TableItem = ({ data, setRefresh }) => {
  const handleRemove = () => {
    // console.log(data.id, "delete");
    DataApi({ data: data.id, method: "DELETE" });
    setRefresh((prev) => !prev);
  };
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.department}</td>
      <td>{data.salary}</td>
      <td>{data.marital ? "Married" : "Single"}</td>
      <td>{data.address}</td>
      <td>{data.profile}</td>
      <td>
        <button onClick={handleRemove}>Delete</button>
      </td>
    </tr>
  );
};

export default TableItem;
