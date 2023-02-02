import React from "react";
import "boxicons";

const Body = () => {
  return (
    <>
      <section className="my-skills lg:pl-20 lg:pr-20 lg:pb-20 min-[350px]:p-2 min-[350px]:mt-10">
        <h2 className="my-title font-semibold">MY SKILLS</h2>

        <div className="flex flex-wrap justify-around">
          <div className="m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 flex items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" type="logo" name="html5"></box-icon>
            <h3>HTML</h3>
          </div>

          <div className="m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 flex items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" type="logo" name="html5"></box-icon>
            <h3>CSS</h3>
          </div>

          <div className="m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 flex items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="javascript" type="logo"></box-icon>
            <h3>JavaScript</h3>
          </div>

          <div className="m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 flex items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" type="logo" name="typescript"></box-icon>
            <h3>TypeScript</h3>
          </div>

          <div className="m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 flex items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="php" type="logo"></box-icon>
            <h3>PHP</h3>
          </div>

          <div className="m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 flex items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="data" type="solid"></box-icon>
            <h3>MySQL</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="react" type="logo"></box-icon>
            <h3>React js</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" type="solid" name="file-js"></box-icon>
            <h3>Next js</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="nodejs" type="logo"></box-icon>
            <h3>Node js</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" type="solid" name="file-js"></box-icon>
            <h3>Express js</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="mongodb" type="logo"></box-icon>
            <h3>Mongo db</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="file-json" type="solid"></box-icon>
            <h3>Json</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" type="logo" name="bootstrap"></box-icon>
            <h3>BootStrap</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="jquery" type="logo"></box-icon>
            <h3>jQuery</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="tailwind-css" type="logo"></box-icon>
            <h3>TailWind</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="git" type="logo"></box-icon>
            <h3>Git</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="sass" type="logo"></box-icon>
            <h3>Sass</h3>
          </div>

          <div className="flex m-5 p-3 text-3xl min-[350px]:text-sm w-60 min-[350px]:m-1 items-center justify-center skills md:m-3 lg:w-72">
            <box-icon color="white" name="component" type="solid"></box-icon>
            <h3>M Ui</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
