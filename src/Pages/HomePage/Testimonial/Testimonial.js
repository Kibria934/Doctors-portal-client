import React from "react";
import quate from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      country: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1 ,
    },
    {
      _id: 2,
      name: "Rahim Mia",
      country: "Canada",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img:  people2 ,
    },
    {
      _id: 3,
      name: "Hatson Herry",
      country: "Bangladesh",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img:  people3 ,
    },
  ];
  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-primary text-xl font-bold">Testimonial</h3>
          <h1 className="text-3xl">What Our Patient Says</h1>
        </div>
        <div>
          <img className="lg:w-48 w-[98px] " src={quate} alt="" />
        </div>
      </div>
      <div className="grid  pl-4 mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
