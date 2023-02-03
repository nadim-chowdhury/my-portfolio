import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="my-navbar flex items-center justify-between">
        <h1
          data-aos="zoom-in"
          className="logo p-2 ml-6 min-[350px]:text-xl md:text-4xl"
        >
          <a href="#home">MY-PORTFOLIO</a>
        </h1>

        <div className="links mr-6 min-[350px]:hidden md:block">
          <ul data-aos="zoom-in" className="flex">
            <li className="p-2">
              <a href="#home">Home</a>
            </li>
            <li className="p-2">
              <a href="#about">About</a>
            </li>
            <li className="p-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
