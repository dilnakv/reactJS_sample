import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "iPhone", price: 150000 },
    { id: 2, name: "T-Shirt", price: 700 },
    { id: 3, name: "Shirt", price: 1000 },
  ];

  return (
    <>
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
};

export default ProductList;
