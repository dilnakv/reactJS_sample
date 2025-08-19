import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Review {
  id: number;
  message: string;
}

const ProductReview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [reviews, setReviews] = useState<Review[]>([{ id: 1, message: "Great product, loved it!" },
            { id: 2, message: "Quality could be better." },
            { id: 3, message: "Worth the price 👍" },]);


  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.message}</li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
};

export default ProductReview;
