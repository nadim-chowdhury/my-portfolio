import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
  return (
    <div className="my-footer p-20 max-[499px]:p-4 max-[499px]:pb-16 max-[499px]:pt-10 my-footer-bg">
      <h2 className="my-title font-semibold">CONTACT ME</h2>

      <div
        data-aos="zoom-in"
        data-aos-offset="250"
        className="flex items-center justify-center lg:pt-6"
      >
        <div className="footer-right max-[499px]:text-sm">
          <div className="flex justify-center items-center">
            <i class="fa-solid fa-phone"></i>
            <p className="ml-2">+880 1971258803</p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <i class="fa-solid fa-envelope"></i>
            <p className="ml-2">nadim-chowdhury@outlook.com</p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <i class="fa-solid fa-location-dot"></i>
            <p className="ml-2">Dhaka, Bangladesh</p>
          </div>

          <div className="my-icons flex justify-center mt-5">
            <a className="mr-4" href="https://facebook.com/nadim.ch0wdhury">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a className="mr-4" href="https://twitter.com/nadim_ch0wdhury">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
            <a className="mr-4" href="https://instagram.com/nadim_ch0wdhury">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a className="mr-4" href="https://linkedin.com/in/nadim-chowdhury/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/nadim-chowdhury">
              <i class="fa-brands fa-square-github"></i>
            </a>
          </div>

          <div className="flex items-center justify-center mt-5">
            <i class="fa-solid fa-copyright"></i>
            <h2 className="ml-2 min-[350px]:text-[12px] md:text-xl">
              2023 All Rights Reserved By Nadim Chowdhury.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
