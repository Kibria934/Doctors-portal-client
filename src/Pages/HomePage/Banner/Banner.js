import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryBtn from "../../SharedPage/PrimaryBtn";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row lg:flex-row-reverse">
        <img
          src={chair}
          className="sm:max-w-sm md:max-w-sm rounded-lg hover:shadow-2xl lg:max-w-2xl shadow-2xl"
        />
        <div className="lg:max-w-2xl sm:max-w-sm md:max-w-sm ">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryBtn>get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
