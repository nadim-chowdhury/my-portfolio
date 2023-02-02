import React from "react";
import Aimg from "../assets/a.jpeg";
import A2img from "../assets/a2.jpg";
import A3img from "../assets/a3.jpg";
import Dimg from "../assets/d.jpeg";
import Eimg from "../assets/e.jpeg";
import E2img from "../assets/e2.jpg";

const Projects = () => {
  return (
    <>
      <section className="projects lg:p-20 bg-slate-100 min-[350px]:p-2 min-[350px]:mt-10 min-[350px]:pt-10 min-[350px]:pb-14 lg:mt-0">
        <h2 className="my-title font-semibold">MY PROJECTS</h2>

        <div className="flex flex-wrap justify-between min-[350px]:justify-around">
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={A2img}
            alt="img"
          />
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={A3img}
            alt="img"
          />
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={Aimg}
            alt="img"
          />
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={Eimg}
            alt="img"
          />
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={E2img}
            alt="img"
          />
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={Eimg}
            alt="img"
          />
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={Dimg}
            alt="img"
          />
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={Dimg}
            alt="img"
          />
          <img
            className="w-[30%] min-[350px]:w-4/5 min-[350px]:m-3 md:w-[40%] md:m-5 lg:w-1/4"
            src={Dimg}
            alt="img"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
