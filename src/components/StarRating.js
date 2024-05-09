import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={props.ratingValue}
              style={{ display: "none" }}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={25}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              className=" star mb-1"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
