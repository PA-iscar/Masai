import React from "react";

const TableItem = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.department}</td>
      <td>{data.salary}</td>
      <td>{data.marital ? "Married" : "Single"}</td>
      <td>{data.address}</td>
      <td>{data.profile}</td>
    </tr>
  );
};

export default TableItem;
