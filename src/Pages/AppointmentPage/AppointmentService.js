import React from "react";
import PrimaryBtn from "../SharedPage/PrimaryBtn";

const AppointmentService = ({service}) => {
    const {name,slots}=service;
  return (
    <div class="card lg:max-w-lg m-4 w-100 bg-base-100 text-center shadow-lg hover:shadow-2xl">
      <div class="card-body">
        <h2 class="text-xl text-secondary text-bold text-center">{name}</h2>
        <p className="text-[13px]">
          {
            slots.length? 
            <span>{slots[0]}</span>:
            <span className="text-red-500">Please Try Another Day</span>
          }
        </p>
        <p className="text-[13px]">{slots.length} {slots.length>1? "spaces":'space'} available</p>
        <div class="card-actions justify-center">
          <button disabled={slots.length===0} className="btn btn-primary px-10 shadow-xl text-uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
