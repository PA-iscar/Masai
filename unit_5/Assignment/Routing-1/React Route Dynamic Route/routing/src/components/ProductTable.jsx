import React from "react";
import { Link } from "react-router-dom";

const ProductTable = ({value}) => {
    const val = `/products/${value.id}`;
  return (
    <>
        <table border="1px">
            <tbody>
                <tr>
                    <td>{value.name}</td>
                    <td>{value.price}</td>
                    <td><Link to={val} key={value.id}>Product {value.id}</Link></td>
                </tr>
            </tbody>
        </table>
    </>
  );
};

export default ProductTable;
