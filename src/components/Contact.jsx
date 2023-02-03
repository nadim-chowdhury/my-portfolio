import React from "react";
import Aaimg from "../assets/myself.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  return (
    <div className="p-20 mb-5  min-[350px]:p-2  min-[350px]:mt-10  min-[350px]:mb-12 lg:p-6">
      <h2 className="my-title font-semibold" id="contact">
        SHARE THOUGHTS
      </h2>
      <div
        data-aos="zoom-in"
        data-aos-offset="50"
        className="flex justify-center items-center min-[350px]:flex-col md:flex-row"
      >
        <div className="min-[350px]:mb-8 md:mr-4 md:pt-8 md:items-center">
          <img
            className="w-[320px] rounded-xl cl-img  min-[350px]:w-[280px] md:w-[320px]"
            src={Aaimg}
            alt="img"
          />
        </div>

        <div className="right-side">
          <form action="#">
            <div className="text-slate-100 flex justify-center max-[499px]:flex-col">
              <input
                className="max-[499px]:w-[300px] xl:w-[360px] md:w-50"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className="max-[499px]:w-[300px] xl:w-[360px] md:w-50"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="flex justify-center mb-5">
              <textarea
                className="max-[499px]:w-[300px] md:w-96 xl:w-[740px]"
                rows="8"
                placeholder="Enter Your Message"
              ></textarea>
            </div>

            <div className="flex justify-center max-[499px]:w-80 md:w-[382px] md:ml-3 lg:w-full lg:ml-0">
              <button className="max-[499px]:ml-2 max-[499px]:mr-2 md:w-[380px]">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
