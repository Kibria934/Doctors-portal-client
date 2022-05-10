import React from "react";
import Service from "./Service";
import florida from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Dental from "./Dental";

const Services = () => {
  return (
    <div className="mt-10">
      <div>
        <h3 className="text-secondary font-bold text-[20px] text-center">
          OUR SERVICES
        </h3>
        <h1 className="text-bold text-[36px] text-accent text-center">
          Services We Provide
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-10 mt-10 m-6">
        <Service cardTitle={"Fluoride Treatment"} img={florida}></Service>
        <Service cardTitle={"Cavity Filling"} img={cavity}></Service>
        <Service cardTitle={"Teeth Whitening"} img={whitening}></Service>
      </div>
      <div>
          <Dental></Dental>
      </div>
    </div>
  );
};

export default Services;
