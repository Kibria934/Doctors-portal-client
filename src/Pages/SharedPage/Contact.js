import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from "./PrimaryBtn";

const Contact = () => {
  return (
    <section
      className="mt-20 flex flex-col justify-center text-center items-center p-20"
      style={{ background: `url(${appointment})` }}
    >
      <div>
        <h3 className="text-xl  text-secondary font-bold">
          Contact Us
        </h3>
        <h1 className=" text-4xl text-white">
          Stay connected with us
        </h1>
      </div>
      <div className="mt-10">
          <input className=" h-10 lg:w-96 w-80 rounded-md p-3 " type="text " name="email" placeholder="Email Address"/><br/>
          <input className="mt-3 h-10 lg:w-96 w-80 rounded-md p-3 " type="text " name="subject" placeholder="Subject"/><br/>
          <textarea className="lg:w-96 w-80 mt-3 rounded-md p-3 h-28 " placeholder="Your message"></textarea><br/>
          <div className="mt-5">
          <PrimaryBtn > submit </PrimaryBtn>
          </div>
      </div>
    </section>
  );
};

export default Contact;
