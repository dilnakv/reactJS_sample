import type { ProductType } from "./ProductListUseCallback";

// Product component
interface ProductProps {
  product: ProductType;
  onAddToCart: (id: number) => void;
}

export const ProductCard = (props: ProductProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{props.product.name}</h3>
      <p>Price: ${props.product.price}</p>
      <button onClick={() => props.onAddToCart(props.product.id)}>Add to Cart</button>
    </div>
  );
};