import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import { TableItem } from "./tableItem";

export const AllProducts = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setIsLoaded(true);
        setData(d);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>All Products</div>
      <br />
      <br />
      <table border="1px">
        <tbody>
          {isLoaded && data.map((el) => <TableItem value={el} key={el.id} />)}
        </tbody>
      </table>
      <Switch>
        <Route path="/products/:id">
          <ProductItem />
        </Route>
      </Switch>
    </div>
  );
};