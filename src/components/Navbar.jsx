import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="my-navbar flex items-center justify-between">
        <h1 className="logo p-2 ml-6 lg:text-4xl md:text-3xl max-[499px]:text-xl">
          <a href="#home">MyPortfolio</a>
        </h1>

        <div className="links mr-6">
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
      </div>
    </>
  );
};

export default Navbar;
