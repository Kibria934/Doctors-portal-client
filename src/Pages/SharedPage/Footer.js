import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <section>
      <footer style={{ background: `url(${footer})`, backgroundSize:'cover' }} class="footer p-20">
        <div className="">
          <span class="footer-title">SERVICES</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <p className="text-center m-5">Copyright {new Date().getFullYear()} All Rights Reserved</p>
    </section>
  );
};

export default Footer;
