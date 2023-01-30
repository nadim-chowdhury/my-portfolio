import React from "react";

const Hobbies = () => {
  return (
    <>
      <section className="my-hobbies pl-20 pr-20 pb-20 pt-20  max-[499px]:p-10">
        <h2 className="my-title font-semibold">My Hobbies</h2>

        <div className="flex items-center justify-around hobbies flex-wrap max-[499px]:justify-center">
          <div className="flex p-3 hobby justify-center items-center text-4xl m-2 w-64 max-[499px]:text-sm">
            <i class="fa-solid fa-music"></i>
            <p className="ml-6">Liestening</p>
          </div>

          <div className="flex p-3 hobby justify-center items-center text-4xl m-2 w-64 max-[499px]:text-sm">
            <i class="fa-solid fa-gamepad"></i>
            <p className="ml-6">Gamimg</p>
          </div>

          <div className="flex p-3 hobby justify-center items-center text-4xl m-2 w-64 max-[499px]:text-sm">
            <i class="fa-solid fa-book"></i>
            <p className="ml-6">Reading Books</p>
          </div>

          <div className="flex p-3 hobby justify-center items-center text-4xl m-2 w-64 max-[499px]:text-sm">
            <i class="fa-solid fa-plane"></i>
            <p className="ml-6">Travelling</p>
          </div>

          <div className="flex p-3 hobby justify-center items-center text-4xl m-2 w-64 max-[499px]:text-sm">
            <i class="fa-solid fa-camera"></i>
            <p className="ml-6">Photography</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
