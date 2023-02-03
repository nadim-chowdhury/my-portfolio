import React from "react";
import MySelf from "../assets/myself.png";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <div className="my-header" id="home">
        <div className="bg-png flex justify-around h-screen items-center min-[350px]:flex-col lg:flex-row">
          <div data-aos="zoom-in" className="header-left p-2 min-[350px]:mt-6">
            <h3 className="lg:text-6xl mb-8 min-[350px]:text-xl min-[350px]:text-center lg:text-left md:text-5xl">
              Hello World!
            </h3>
            <h1 className="lg:text-7xl mb-8 min-[350px]:text-2xl min-[350px]:text-center lg:text-left md:text-6xl">
              It's Me <b className="text-gradient">Nadim Chowdhury</b>
            </h1>
            <h2 className="lg:text-6xl mb-8 min-[350px]:text-xl min-[350px]:text-center lg:text-left md:text-5xl">
              I'm A <b className="text-gradient">Web Developer</b>
            </h2>
            <h3 className="lg:text-4xl mb-8 min-[350px]:text-sm min-[350px]:text-center lg:text-left md:text-3xl">
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

            <div className="my-icons min-[350px]:text-center lg:text-left">
              <a
                className="mr-4 ml-[2px]"
                href="https://facebook.com/nadim.ch0wdhury"
              >
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
            <div
              data-aos="zoom-in"
              data-aos-offset="50"
              className="myself min-[350px]:w-60 min-[350px]:pb-5 md:w-full"
            >
              <img src={MySelf} alt="MySelf" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
