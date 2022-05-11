import React from "react";

const Review = ({ review }) => {
  const { name, img,country } = review;
  return (
    <div className="card w-100 hover:drop-shadow-2xl bg-base-100 drop-shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mt-5 mr-5">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
              <h2 className="text-[20px] font-semibold text-accent">{name}</h2>
              <p className="text-accent ">{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
