import { useParams, Link, Outlet } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product {id}</h2>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="details" style={{ marginRight: "15px" }}>
          Details
        </Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};
