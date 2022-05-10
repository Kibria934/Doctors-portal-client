import React from "react";
import Contact from "../../SharedPage/Contact";
import Footer from "../../SharedPage/Footer";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="lg:px-12 mb-40">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
      </div>
      <MakeAppointment></MakeAppointment>
      <div className=" px-5 mt-10 lg:px-12">
        <Testimonial></Testimonial>
      </div>
        <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
