import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import ProductTable from "./ProductTable";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => setData(d));
  },[]);

  return (
    <>
      <div>Products</div>
      <div>
        {data.map(el => {
          return <ProductTable value={el} key={el.id} />
          // return <Link to={val} key={el.id}>Product {el.id}</Link>
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Products;
