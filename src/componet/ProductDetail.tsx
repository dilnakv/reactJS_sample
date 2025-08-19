import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    // Example API: FakeStore
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="150" />
      <p>{product.description}</p>
      <p>
        <b>Price:</b> ${product.price}
      </p>
    </div>
  );
};
