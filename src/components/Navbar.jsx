import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="my-navbar flex items-center justify-between">
        <h1 className="logo p-2 lg:text-4xl md:text-3xl max-[499px]:text-xl">
          <a href="#home">MyPortfolio</a>
        </h1>

        <div className="links">
          <ul className="flex lg:text-xl md:text-base max-[499px]:text-sm">
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

        <div className="hire-me-btn p-2">
          <button type="button">Hire Me</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
