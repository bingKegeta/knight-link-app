import React from "react";
import Image from "next/image";

interface UniProps {
  name: string;
  description: string;
  student_count?: number;
  //user_is_part: boolean
  picture?: string; //! Need to manage this
}

const UniversityCard = ({
  name,
  description,
  student_count,
  picture,
}: UniProps) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/uni_placeholder.jpg"
          width={1000}
          height={1000}
          alt="university"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
