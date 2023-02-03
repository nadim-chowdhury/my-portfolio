import React from "react";
import Aimg from "../assets/a.png";
import Cimg from "../assets/b.png";
import Bimg from "../assets/c.png";
import Dimg from "../assets/d.png";
import Eimg from "../assets/e.png";
import Fimg from "../assets/f.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Projects = () => {
  return (
    <section className="projects lg:p-20 bg-slate-100 min-[350px]:p-2 min-[350px]:mt-10 min-[350px]:pt-10 min-[350px]:pb-14 lg:mt-0">
      <h2 className="my-title font-semibold">MY PROJECTS</h2>

      <div className="flex flex-wrap justify-between min-[350px]:justify-around">
        <a
          href="https://greatcars.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Aimg} alt="img" />
        </a>

        <a
          href="https://ec0mmerce.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Bimg} alt="img" />
        </a>

        <a
          href="https://vanillaportfolio.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Cimg} alt="img" />
        </a>

        <a
          href="https://coiinbase.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Dimg} alt="img" />
        </a>

        <a
          href="https://hoo-bnk.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Fimg} alt="img" />
        </a>

        <a
          href="https://gpt3aiclone.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Eimg} alt="img" />
        </a>

        <a
          href="https://greatcars.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Aimg} alt="img" />
        </a>

        <a
          href="https://ec0mmerce.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Bimg} alt="img" />
        </a>

        <a
          href="https://vanillaportfolio.netlify.app/"
          className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
        >
          <img data-aos="zoom-in" src={Cimg} alt="img" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
