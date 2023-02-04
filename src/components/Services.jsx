import React from "react";
import Aximg from "../assets/m.jpg";
import Bximg from "../assets/n.jpg";
import Cximg from "../assets/o.jpg";

const Services = () => {
  return (
    <section className="lg:pl-20 lg:pr-20 lg:pb-10 lg:pt-10 min-[350px]:p-2 min-[350px]:pt-5 min-[350px]:mt-5 min-[350px]:pb-5">
      <h2 className="my-title font-semibold">MY SERVICES</h2>

      <div className="flex justify-between min-[350px]:flex-col md:flex-row">
        <div
          data-aos="zoom-in"
          className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1 services m-5"
        >
          <h4 className="mt-4 mb-2 text-2xl text-center pb-10 max-[499px]:text-xl">
            Frontend Development
          </h4>
          <img src={Aximg} alt="img" />
        </div>

        <div
          data-aos="zoom-in"
          className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1 services m-5"
        >
          <h4 className="mt-4 mb-2 text-2xl text-center pb-10 max-[499px]:text-xl">
            Full Stack Web Development
          </h4>
          <img src={Bximg} alt="img" />
        </div>

        <div
          data-aos="zoom-in"
          className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1  services m-5"
        >
          <h4 className="mt-4 mb-2 text-2xl text-center pb-10 max-[499px]:text-xl">
            Single Page Application
          </h4>

          <img src={Cximg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Services;
