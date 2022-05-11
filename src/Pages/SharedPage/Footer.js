import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <section>
      <footer style={{ background: `url(${footer})`, backgroundSize:'cover' }} className="footer p-20">
        <div className="">
          <span className="footer-title">SERVICES</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <p className="text-center m-5">Copyright {new Date().getFullYear()} All Rights Reserved</p>
    </section>
  );
};

export default Footer;
