import React from "react";

const AppointmentService = ({service,setTreatment}) => {
    const {name,slots,price}=service;
    const handleModal =()=>{
      setTreatment(service)
      
    }
  return (
    <div className="card lg:max-w-lg m-4 w-100 bg-base-100 hover:drop-shadow-2xl drop-shadow-lg text-center">
      <div className="card-body">
        <h2 className="text-xl text-secondary text-bold text-center">{name}</h2>
        <p className="text-[13px]">
          {
            slots.length? 
            <span>{slots[0]}</span>:
            <span className="text-red-500">Please Try Another Day</span>
          }
        </p>
        <p className="text-lg text-bold text-center">Price:${price}</p>
        <p className="text-[13px]">{slots.length} {slots.length>1? "spaces":'space'} available</p>
        <div className="card-actions justify-center">
          {/*--------------------- Modal Button-------------------- */}
        <label disabled={slots.length===0} 
         htmlFor="appointment-modal"
          className="btn btn-primary px-10 text-uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary"
          onClick={handleModal}
          >
        Book Appointment
      </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
