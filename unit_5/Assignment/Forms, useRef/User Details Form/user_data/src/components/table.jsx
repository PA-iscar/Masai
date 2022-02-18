import React from "react";
import TableItem from "./tableItem";

const Table = ({ userData }) => {
  return (
    <>
      <table border="1px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
            <th>Address</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data) => {
            return <TableItem data={data} key={data.name} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
