import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryBtn from "../../SharedPage/PrimaryBtn";
const Dental = () => {
  return (
    <div class="hero min-h-100 mt-[200px] max-w-100">
      <div class="hero-content flex-col lg:w-full lg:justify-evenly lg:flex-row">
        <img
          src={treatment}
          class="sm:max-w-sm md:min-w-md lg:w-[1000px] rounded-lg shadow-2xl"
        />
        <div className="lg:w-[500px]">
          <h1 class="text-5xl lg:w-lg font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryBtn>get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Dental;
