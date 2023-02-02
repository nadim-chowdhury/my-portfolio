import React from "react";
import Aimg from "../assets/aa.jpeg";
import Bimg from "../assets/bb.jpeg";
import Cimg from "../assets/cc.jpeg";
import Dimg from "../assets/dd.jpeg";
import Eimg from "../assets/ee.jpeg";
import Fimg from "../assets/ff.jpeg";
import Gimg from "../assets/gg.jpeg";
import Himg from "../assets/hh.jpeg";
import Iimg from "../assets/ii.jpeg";

const Certificates = () => {
  return (
    <>
      <section className="certificates lg:p-20 bg-slate-100 min-[350px]:p-2 min-[350px]:pt-10 min-[350px]:mt-10 min-[350px]:pb-10">
        <h2 className="my-title font-semibold">MY CERTIFICATES</h2>

        <div className="flex justify-between min-[350px]:flex-col md:flex-row">
          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CT-B9J2MWSX">
              <img src={Aimg} alt="img" />
            </a>
          </div>

          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CT-T6KQNCDI">
              <img src={Bimg} alt="img" />
            </a>
          </div>
          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CC-EOPPOH8U">
              <img src={Cimg} alt="img" />
            </a>
          </div>
        </div>
        <div className="flex justify-between min-[350px]:flex-col md:flex-row">
          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CC-O495X8XL">
              <img src={Dimg} alt="img" />
            </a>
          </div>

          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CT-MAD1MQTN">
              <img src={Eimg} alt="img" />
            </a>
          </div>

          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CC-6LZOPKVS">
              <img src={Fimg} alt="img" />
            </a>
          </div>
        </div>
        <div className="flex justify-between min-[350px]:flex-col md:flex-row">
          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CT-R6MBUEYR">
              <img src={Gimg} alt="img" />
            </a>
          </div>
          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CC-ZTEQLRVB">
              <img src={Himg} alt="img" />
            </a>
          </div>
          <div className="p-10 min-[350px]:p-5">
            <a href="https://www.sololearn.com/certificates/CT-QSWXSEZG">
              <img src={Iimg} alt="img" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
