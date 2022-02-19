import React, { useState, useEffect } from "react";
import TableItem from "./tableItem";
import DataApi from "./dataApi";
import Filters from "./filter";
const Table = ({ refresh, setRefresh }) => {
  const [userData, setUserData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const { dep, order } = filters;
    const data = DataApi({
      method: "GET",
      page: page,
      dep: dep,
      order: order,
    });
    data.then((d) => setUserData(d));
  }, [filters, page, refresh]);

  return (
    <>
      <Filters setFilters={setFilters} page={page} setPage={setPage} />
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data) => {
            return (
              <TableItem data={data} key={data.id} setRefresh={setRefresh} />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
