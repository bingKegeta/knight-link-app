"use client";
import React, { useState } from "react";

const UserRating = ({
  name,
  rating,
  timestamp,
}: {
  name: string;
  rating: number;
  timestamp: string;
}) => {
  const [selectedRating, setSelectedRating] = useState<number>(rating);

  const handleChange = (newRating: number) => {
    setSelectedRating(newRating);
  };

  const uname = `${name}Rating${timestamp}`;

  return (
    <div className="rating" key={`rating-${name}`}>
      {/* {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={`${name}-${value}`}
          type="radio"
          name="userRating"
          className="mask mask-star"
          checked={value == selectedRating}
          readOnly={true}
        />
      ))} */}
      <input
        type="radio"
        name={uname}
        className="mask mask-star"
        readOnly={true}
        checked={rating === 1}
      />
      <input
        type="radio"
        name={uname}
        className="mask mask-star"
        readOnly={true}
        checked={rating === 2}
      />
      <input
        type="radio"
        name={uname}
        className="mask mask-star"
        readOnly={true}
        checked={rating === 3}
      />
      <input
        type="radio"
        name={uname}
        className="mask mask-star"
        readOnly={true}
        checked={rating === 4}
      />
      <input
        type="radio"
        name={uname}
        className="mask mask-star"
        readOnly={true}
        checked={rating === 5}
      />
    </div>
  );
};

export default UserRating;
