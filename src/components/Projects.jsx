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
      <section className="projects pl-20 pr-20 pb-20 pt-20 bg-slate-100 max-[499px]:p-10 max-[899px]:p-20 max-[399px]:p-2">
        <h2 className="my-title font-semibold">My Projects</h2>

        <div className="flex-col justify-between  max-[499px]:w-72 max-[899px]:w-full max-[499px]:ml-[22px] max-[399px]:ml-[36px]">
          <div className="flex justify-around max-[499px]:flex-col max-[899px]:flex-col">
            <img className="w-[480px]" src={Aimg} alt="img" />
            <img className="w-[480px]" src={A2img} alt="img" />
            <img className="w-[480px]" src={A3img} alt="img" />
          </div>

          <div className="flex justify-around max-[499px]:flex-col max-[899px]:flex-col">
            <img className="w-[480px]" src={Eimg} alt="img" />
            <img className="w-[480px]" src={E2img} alt="img" />
            <img className="w-[480px]" src={Eimg} alt="img" />
          </div>

          <div className="flex justify-around max-[499px]:flex-col max-[899px]:flex-col">
            <img className="w-[480px]" src={Dimg} alt="img" />
            <img className="w-[480px]" src={Dimg} alt="img" />
            <img className="w-[480px]" src={Dimg} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
