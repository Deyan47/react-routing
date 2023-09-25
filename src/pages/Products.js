import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default Products;
