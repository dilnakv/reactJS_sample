import { useMemo } from "react";
import useFetch from "./hook/useFetch";
import { useNavigate, useSearchParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data: products, loading, error } = useFetch<Product[]>(
    "https://fakestoreapi.com/products"
  );

  const category = searchParams.get("category"); // ex: "electronics"
  const sort = searchParams.get("sort"); // ex: "price"

  // Filter and sort using useMemo (so it recalculates only when inputs change)
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let result = [...products];

    // Filter by category
    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // Sort
    if (sort === "price") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return result;
  }, [products, category, sort]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!products) return <p>No products found</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "'Garamond ', serif" }}>
      <h2>Product List</h2>

      {/* Controls to update query params */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => navigate("/dashboard?category=electronics")}>
          Electronics
        </button>
        <button onClick={() => navigate("/dashboard?category=jewelery")}>
          Jewelery
        </button>
        <button onClick={() => navigate("/dashboard?sort=price")}>
          Sort by Price
        </button>
        <button onClick={() => navigate("/dashboard?sort=rating")}>
          Sort by Rating
        </button>
        <button onClick={() => navigate("/dashboard")}>Clear Filters</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ height: "100px", objectFit: "contain" }}
            />
            <h4>{product.title}</h4>
            <button onClick={() => navigate(`/products/${product.id}`)}>
              View Details
            </button>
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
