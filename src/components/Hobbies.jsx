import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Hobbies = () => {
  return (
    <>
      <section className="my-hobbies lg:pb-10 lg:pl-20 lg:pr-20 min-[350px]:p-2">
        <h2 className="my-title font-semibold">MY HOBBIES</h2>

        <div className="flex items-center justify-around hobbies flex-wrap">
          <div
            data-aos="zoom-in"
            data-aos-offset="250"
            className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3"
          >
            <i class="fa-solid fa-book"></i>
            <p className="ml-6">Reading</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-offset="250"
            className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3"
          >
            <i class="fa-solid fa-music"></i>
            <p className="ml-6">Liestening</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-offset="250"
            className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3"
          >
            <i class="fa-solid fa-plane"></i>
            <p className="ml-6">Travelling</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-offset="250"
            className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3"
          >
            <i class="fa-solid fa-gamepad"></i>
            <p className="ml-6">Gamimg</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-offset="250"
            className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3"
          >
            <i class="fa-solid fa-camera"></i>
            <p className="ml-6">Photography</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
