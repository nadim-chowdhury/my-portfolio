import React from "react";

const Education = () => {
  return (
    <>
      <section className="my-education pl-20 pr-20 pb-20 max-[499px]:pl-2 max-[499px]:pr-2 max-[499px]:flex-col">
        <h2 className="my-title font-semibold">My Education</h2>

        <div className="flex items-center justify-between text-center max-[499px]:flex-col max-[899px]:flex-col">
          <div className="text-2xl w-1/3 m-6 p-5 education max-[499px]:text-sm max-[499px]:mb-5 max-[499px]:w-80 max-[899px]:mb-10 max-[899px]:w-[640px]">
            <h3 className="mb-4 text-4xl font-medium">B.S.C</h3>
            <hr />
            <h4 className="mt-4 mb-2 max-[499px]:text-xl">
              Habbibulla Bahar University
            </h4>
            <p>Passing Year : Running</p>
          </div>

          <div className="text-2xl w-1/3 m-6 p-5 education max-[499px]:text-sm max-[499px]:mb-5 max-[499px]:w-80 max-[899px]:mb-10 max-[899px]:w-[640px]">
            <h3 className="mb-4 text-4xl font-medium">H.S.C</h3>
            <hr />
            <h4 className="mt-4 mb-2 max-[499px]:text-xl">
              Kabi Nazrul Govt. College
            </h4>
            <p>Passing Year : 2019</p>
          </div>

          <div className="text-2xl w-1/3 m-6 p-5 education max-[499px]:text-sm max-[499px]:w-80 max-[899px]:w-[640px]">
            <h3 className="mb-4 text-4xl font-medium">S.S.C</h3>
            <hr />
            <h4 className="mt-4 mb-2 max-[499px]:text-xl">
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
