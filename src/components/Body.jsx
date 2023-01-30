import React from "react";
import "boxicons";

const Body = () => {
  return (
    <>
      <section className="my-skills pl-20 pr-20 pb-20 max-[499px]:p-10">
        <h2 className="my-title font-semibold">My Skills</h2>

        <div className="flex-col">
          <div className="flex justify-between max-[499px]:flex-col max-[899px]:flex-row max-[899px]:flex-wrap">
            <div className="m-5 p-2 text-4xl w-60 flex items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" type="logo" name="html5"></box-icon>
              <h3>HTML</h3>
            </div>

            <div className="m-5 p-2 text-4xl w-60 flex items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" type="logo" name="html5"></box-icon>
              <h3>CSS</h3>
            </div>

            <div className="m-5 p-2 text-4xl w-60 flex items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="javascript" type="logo"></box-icon>
              <h3>JavaScript</h3>
            </div>

            <div className="m-5 p-2 text-4xl w-60 flex items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" type="logo" name="typescript"></box-icon>
              <h3>TypeScript</h3>
            </div>

            <div className="m-5 p-2 text-4xl w-60 flex items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="php" type="logo"></box-icon>
              <h3>PHP</h3>
            </div>

            <div className="m-5 p-2 text-4xl w-60 flex items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="data" type="solid"></box-icon>
              <h3>MySQL</h3>
            </div>
          </div>

          <div className="flex justify-between max-[499px]:flex-col max-[899px]:flex-wrap max-[899px]:flex-row">
            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="react" type="logo"></box-icon>
              <h3>React js</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" type="solid" name="file-js"></box-icon>
              <h3>Next js</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="nodejs" type="logo"></box-icon>
              <h3>Node js</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" type="solid" name="file-js"></box-icon>
              <h3>Express js</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="mongodb" type="logo"></box-icon>
              <h3>Mongo db</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="file-json" type="solid"></box-icon>
              <h3>Json</h3>
            </div>
          </div>

          <div className="flex justify-between max-[499px]:flex-col max-[899px]:flex-wrap max-[899px]:flex-row">
            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <h3>BootStrap</h3>
            </div>
            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="jquery" type="logo"></box-icon>
              <h3>jQuery</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon
                color="white"
                name="tailwind-css"
                type="logo"
              ></box-icon>
              <h3>TailWind Css</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="git" type="logo"></box-icon>
              <h3>Git</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="sass" type="logo"></box-icon>
              <h3>Sass</h3>
            </div>

            <div className="flex m-5 p-2 text-4xl w-60 items-center justify-center skills max-[499px]:m-1 max-[399px]:ml-8">
              <box-icon color="white" name="component" type="solid"></box-icon>
              <h3>Material Ui</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
