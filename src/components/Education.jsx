import React from "react";

const Education = () => {
  return (
    <>
      <section className="my-education pl-20 pr-20 pb-20 min-[350px]:p-2 min-[350px]:mt-10">
        <h2 className="my-title font-semibold">MY EDUCATIONS</h2>

        <div className="flex flex-wrap items-center justify-around text-center">
          <div className="lg:text-2xl lg:w-[28%] m-6 p-5 education max-[499px]:text-sm max-[499px]:mb-5 max-[499px]:w-80 max-[899px]:mb-10 max-[899px]:w-[640px]">
            <h3 className="mb-4 text-4xl font-medium">B.S.C</h3>
            <hr />
            <h4 className="mt-4 mb-2 text-3xl max-[499px]:text-xl">
              Habbibulla Bahar University
            </h4>
            <p>Passing Year : Running</p>
          </div>

          <div className="lg:text-2xl lg:w-[28%] m-6 p-5 education max-[499px]:text-sm max-[499px]:mb-5 max-[499px]:w-80 max-[899px]:mb-10 max-[899px]:w-[640px]">
            <h3 className="mb-4 text-4xl font-medium">H.S.C</h3>
            <hr />
            <h4 className="mt-4 mb-2 text-3xl max-[499px]:text-xl">
              Kabi Nazrul Govt. College
            </h4>
            <p>Passing Year : 2019</p>
          </div>

          <div className="lg:text-2xl lg:w-[28%] m-6 p-5 education max-[499px]:text-sm max-[499px]:w-80 max-[899px]:w-[640px]">
            <h3 className="mb-4 text-4xl font-medium">S.S.C</h3>
            <hr />
            <h4 className="mt-4 mb-2 text-3xl max-[499px]:text-xl">
              AK High School & College
            </h4>
            <p>Passing Year : 2017</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
