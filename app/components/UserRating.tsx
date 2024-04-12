"use client";
import React, { useState } from "react";

const UserRating = ({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) => {
  const [selectedRating, setSelectedRating] = useState<1 | 2 | 3 | 4 | 5>(
    rating
  );

  const handleChange = (newRating: 1 | 2 | 3 | 4 | 5) => {
    setSelectedRating(newRating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name="userRating"
          className="mask mask-star"
          checked={value <= rating}
          readOnly
        />
      ))}
    </div>
  );
};

export default UserRating;
