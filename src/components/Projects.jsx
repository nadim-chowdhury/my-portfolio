import React from "react";
import Aimg from "../assets/a.jpg";
import Bimg from "../assets/b.jpg";
import Cimg from "../assets/c.jpg";
import Dimg from "../assets/d.jpg";
import Eimg from "../assets/e.jpg";
import Fimg from "../assets/f.jpg";
// import Gimg from "../assets/g.jpg";
// import Himg from "../assets/h.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Projects = () => {
  return (
    <section className="projects lg:p-20 bg-slate-100 min-[350px]:p-2 min-[350px]:mt-10 min-[350px]:pt-10 min-[350px]:pb-14 lg:mt-0">
      <h2 className="my-title font-semibold">MY PROJECTS</h2>

      <div className="flex flex-wrap justify-between min-[350px]:justify-around">
        <div
          data-aos="zoom-in"
          className="min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-[30%] project"
        >
          <a href="https://ec0mmerce.netlify.app">
            <img src={Aimg} alt="img" />
          </a>
        </div>
        <div
          data-aos="zoom-in"
          className="min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-[30%] project"
        >
          <a href="https://greatcars.netlify.app">
            <img src={Bimg} alt="img" />
          </a>
        </div>
        <div
          data-aos="zoom-in"
          className="min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-[30%] project"
        >
          <a href="https://hoo-bnk.netlify.app">
            <img src={Cimg} alt="img" />
          </a>
        </div>
        <div
          data-aos="zoom-in"
          className="min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-[30%] project"
        >
          <a href="https://gpt3aiclone.netlify.app">
            <img src={Dimg} alt="img" />
          </a>
        </div>
        <div
          data-aos="zoom-in"
          className="min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-[30%] project"
        >
          <a href="https://coiinbase.netlify.app">
            <img src={Eimg} alt="img" />
          </a>
        </div>
        <div
          data-aos="zoom-in"
          className="min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-[30%] project"
        >
          <a href="https://vanillaportfolio.netlify.app">
            <img src={Fimg} alt="img" />
          </a>
        </div>

        {/* <div
          data-aos="zoom-in"
          className="min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-[45%] project"
        >
          <a href="https://greatcars.netlify.app/">
            <img src={Gimg} alt="img" />
          </a>
        </div> */}
        {/* <div
          data-aos="zoom-in"
          className="min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-[45%] project"
        >
          <a href="https://ec0mmerce.netlify.app/">
            <img src={Himg} alt="img" />
          </a>
        </div> */}
        {/* <div
          data-aos="zoom-in"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4 project"
        >
          <a href="https://vanillaportfolio.netlify.app/">
            <img src={Cimg} alt="img" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
