import React from "react";

const Hobbies = () => {
  return (
    <>
      <section className="my-hobbies pl-20 pr-20 pb-20 pt-20 min-[350px]:p-2 min-[350px]:mt-10">
        <h2 className="my-title font-semibold">My Hobbies</h2>

        <div className="flex items-center justify-around hobbies flex-wrap">
          <div className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3">
            <i class="fa-solid fa-book"></i>
            <p className="ml-6">Reading</p>
          </div>

          <div className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3">
            <i class="fa-solid fa-music"></i>
            <p className="ml-6">Liestening</p>
          </div>

          <div className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3">
            <i class="fa-solid fa-plane"></i>
            <p className="ml-6">Travelling</p>
          </div>

          <div className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3">
            <i class="fa-solid fa-gamepad"></i>
            <p className="ml-6">Gamimg</p>
          </div>

          <div className="flex m-5 p-3 hobby justify-center items-center text-4xl w-64 min-[350px]:text-sm min-[350px]:m-1 md:m-3">
            <i class="fa-solid fa-camera"></i>
            <p className="ml-6">Photography</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
