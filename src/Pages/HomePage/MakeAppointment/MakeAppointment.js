import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryBtn from "../../SharedPage/PrimaryBtn";

function MakeAppointment() {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex p-10 lg:p-0 justify-center lg:items-center lg:mt-[250px] "
    >
      <div className="hidden md:hidden lg:block">
        <img className="mt-[-130px] pl-20 flex-1" src={doctor} alt="" />
      </div>
      <div className="text-white flex-1 sm:px-10 sm:py-20 lg:p-20">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl">Make an appointment Today</h2>
        <p className="mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn>get started</PrimaryBtn>
      </div>
    </section>
  );
}

export default MakeAppointment;
