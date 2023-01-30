import React from "react";

const Footer = () => {
  return (
    <>
      <div className="my-footer p-20 max-[499px]:p-5 max-[499px]:pb-20">
        <h2 className="my-title font-semibold">Contact Me</h2>

        <div className="footer-right max-[499px]:text-sm">
          <div className="flex justify-center items-center mt-5">
            <i class="fa-solid fa-phone"></i>
            <p className="ml-2">+880 1971258803</p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <i class="fa-solid fa-envelope"></i>
            <p className="ml-2">nadim-chowdhury@outlook.com</p>
          </div>

          <div className="my-icons flex mt-5 justify-center">
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
          <div className="text-center">
            <h2 className="mt-5 max-[499px]:text-sm">
              &copy; 2023 All Rights Reserved By Nadim Chowdhury.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
