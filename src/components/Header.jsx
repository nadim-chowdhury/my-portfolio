import React from "react";
import MySelf from "../assets/myself.png";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <div className="my-header" id="home">
        <div className="bg-png flex justify-around items-center max-[499px]:flex-col max-[899px]:flex-col">
          <div className="header-left max-[899px]:m-10 max-[399px]:w-4/5">
            <h3 className="text-6xl mb-8 max-[499px]:text-xl max-[899px]:text-4xl">
              Hello World!
            </h3>
            <h1 className="text-7xl mb-8 max-[499px]:text-xl max-[899px]:text-5xl max-[399px]:text-lg">
              It's Me <b className="text-gradient">Nadim Chowdhury</b>
            </h1>
            <h2 className="text-6xl mb-8 max-[499px]:text-xl max-[899px]:text-4xl">
              I'm A <b className="text-gradient">Web Developer</b>
            </h2>
            <h3 className="text-4xl mb-8 max-[499px]:text-[12px] max-[899px]:text-xl max-[399px]:text-[12px]">
              <Typewriter
                options={{
                  strings: [
                    "I Can Build & Develop Full Stack Or Mern Stack",
                    "Creative & Responsive Web Applications",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>

            <div className="my-icons">
              <a className="mr-4" href="https://facebook.com/nadim.ch0wdhury">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a className="mr-4" href="https://twitter.com/nadim_ch0wdhury">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
              <a className="mr-4" href="https://instagram.com/nadim_ch0wdhury">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a
                className="mr-4"
                href="https://linkedin.com/in/nadim-chowdhury/"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/nadim-chowdhury">
                <i class="fa-brands fa-square-github"></i>
              </a>
            </div>
          </div>

          <div className="header-right">
            <div className="myself max-[499px]:w-60 ">
              <img src={MySelf} alt="MySelf" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
