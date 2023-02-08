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
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Certificates = () => {
  return (
    <section className="certificates lg:p-20 bg-slate-100 min-[350px]:p-2 min-[350px]:pt-10 min-[350px]:mt-10 min-[350px]:pb-10">
      <h2 className="my-title font-semibold">MY CERTIFICATES</h2>

      <div className="flex justify-between min-[350px]:flex-col md:flex-row">
        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CT-B9J2MWSX">
            <img data-aos="zoom-in" src={Aimg} alt="img" />
          </a>
        </div>

        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CT-T6KQNCDI">
            <img data-aos="zoom-in" src={Bimg} alt="img" />
          </a>
        </div>
        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CC-EOPPOH8U">
            <img data-aos="zoom-in" src={Cimg} alt="img" />
          </a>
        </div>
      </div>
      <div className="flex justify-between min-[350px]:flex-col md:flex-row">
        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CC-O495X8XL">
            <img data-aos="zoom-in" src={Dimg} alt="img" />
          </a>
        </div>

        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CT-MAD1MQTN">
            <img data-aos="zoom-in" src={Eimg} alt="img" />
          </a>
        </div>

        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CC-6LZOPKVS">
            <img data-aos="zoom-in" src={Fimg} alt="img" />
          </a>
        </div>
      </div>
      <div className="flex justify-between min-[350px]:flex-col md:flex-row">
        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CT-R6MBUEYR">
            <img data-aos="zoom-in" src={Gimg} alt="img" />
          </a>
        </div>
        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CC-ZTEQLRVB">
            <img data-aos="zoom-in" src={Himg} alt="img" />
          </a>
        </div>
        <div className="lg:p-10 min-[350px]:p-10 min-[350px]:pt-1">
          <a href="https://www.sololearn.com/certificates/CT-QSWXSEZG">
            <img data-aos="zoom-in" src={Iimg} alt="img" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
