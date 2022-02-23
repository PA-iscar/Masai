import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductItem = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, [id]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {data.name ? (
        <div>
          <br />
          <div>Product Name: {data.name}</div>
          <br />
          <div>Product Price: {data.price}</div>
        </div>
      ) : (
        <h2>Product does not exist</h2>
      )}
    </div>
  );
};