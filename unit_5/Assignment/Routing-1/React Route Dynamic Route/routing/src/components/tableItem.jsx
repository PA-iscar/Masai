import React from "react";
import { Link } from "react-router-dom";

export const TableItem = ({ value }) => {
  const { name, price, id } = value;
  let val = `/products/${id}`;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <Link to={val}>more details</Link>
      </td>
    </tr>
  );
};