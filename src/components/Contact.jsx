import React from "react";
import Aaimg from "../assets/a.png";

const Contact = () => {
  return (
    <div className="p-20 mb-5">
      <h2 className="my-title font-semibold" id="contact">
        Share Thoughts
      </h2>
      <div className="flex justify-around items-center max-[499px]:flex-col max-[899px]:flex-col ">
        <div className="max-[499px]:mb-10 max-[499px]:w-72 max-[899px]:mb-10 max-[899px]:w-80">
          <img className="w-80 rounded-xl cl-img" src={Aaimg} alt="img" />
        </div>

        <div>
          <div className="right-side max-[499px]:w-80">
            <form action="#">
              <div className="text-slate-800 flex justify-center max-[499px]:flex-col">
                <input
                  className="max-[499px]:w-[300px] xl:w-[360px] max-[899px]:w-64"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <input
                  className="max-[499px]:w-[300px] xl:w-[360px] max-[899px]:w-64"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="flex justify-center mb-5">
                <textarea
                  className="max-[499px]:w-[300px] max-[899px]:w-[534px] xl:w-[740px]"
                  rows="8"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>

              <div className="flex justify-center max-[499px]:w-80 max-[899px]:w-[550px]">
                <button className="max-[499px]:ml-2 max-[499px]:mr-2">
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
