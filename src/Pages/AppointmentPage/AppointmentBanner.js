import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({date,setDate}) => {
  return (
      <div style={{background:`url(${bg})`}} class="hero min-h-screen ">
      <div class="hero-content flex justify-around items-center flex-col lg:flex-row-reverse">
        <div className="flex-1">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        </div>
        <div className="flex-1 mt-10 lg:mt-0 shadow-xl mr-20">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
        </div>
      </div>
      </div>
  );
};

export default AppointmentBanner;