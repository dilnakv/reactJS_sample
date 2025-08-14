import React, { useState, useCallback } from "react";
import { ProductCard } from "./ProductCard";

// Product type
export interface ProductType {
  id: number;
  name: string;
  price: number;
}


// Product List component
const ProductListUseCallback: React.FC = () => {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const products: ProductType[] = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Headphones", price: 50 },
    { id: 3, name: "Smartphone", price: 600 },
    { id: 4, name: "Camera", price: 400 },
  ];

  //Without useCallback
  const addToCartWithoutCallback = (id: number) => {
    setCartCount((prev) => prev + 1);
    console.log(`Added product with id ${id} to cart`);
  };

  //With useCallback
  const addToCartWithCallback = useCallback((id: number) => {
    setCartCount((prev) => prev + 1);
    console.log(`Added product with id ${id} to cart`);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Cart Items: {cartCount}</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", width: "200px", marginBottom: "10px" }}
      />
      <div>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCartWithCallback}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListUseCallback;
