import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const ProductListApi = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []); // empty dependency → runs only once on mount

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "'Garamond ', serif" }}>
      <h2>Product List</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img src={product.image} alt={product.title} style={{ height: "100px", objectFit: "contain" }} />
            <h4>{product.title}</h4>
             {/* <p style={{ fontSize: "0.9rem", color: "#555" }}>
              {product.description}
            </p> */}
            <p>🏷️ ${product.price}</p>
              <p>
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
