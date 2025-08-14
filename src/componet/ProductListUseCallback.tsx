import React, { useState, useCallback, useMemo } from "react";
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
//   const [cartCount, setCartCount] = useState(0);
const [cart, setCart] = useState<ProductType[]>([]);

  const products: ProductType[] = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Headphones", price: 50 },
    { id: 3, name: "Smartphone", price: 600 },
    { id: 4, name: "Camera", price: 400 },
  ];

//   //Without useCallback
//   const addToCartWithoutCallback = (id: number) => {
//     setCartCount((prev) => prev + 1);
//     console.log(`Added product with id ${id} to cart`);
//   };

//   //With useCallback
//   const addToCartWithCallback = useCallback((id: number) => {
//     setCartCount((prev) => prev + 1);
//     console.log(`Added product with id ${id} to cart`);
//   }, []);

  const addToCart = useCallback((id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setCart((prev) => [...prev, product]);
    }
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

    const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);
  
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Cart Items: {cart.length}</h2>
       <h3>Total Price: ${totalPrice}</h3>
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
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListUseCallback;
