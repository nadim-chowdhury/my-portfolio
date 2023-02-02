import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <>
      <section
        data-aos="fade-up"  data-aos-offset="320"
        className="lg:p-24 min-[350px]:p-8 min-[350px]:mt-5 lg:mt-0"
      >
        <h2 className="my-title font-semibold" id="about">
          MY SELF
        </h2>
        <p className="lg:text-3xl text-center min-[350px]:text-xl md:text-2xl">
          I'm a creative and passionate web developer who likes to build and
          develop websites for anyone. Learning, improving skills, and adapting
          to new technologies are my hobbies. I can give my total effort and
          perform any teamwork with responsibility. If you have any work from me
          or any types of quries related to me , you can send me message from
          here. It's my pleasure to help you.
        </p>
      </section>
    </>
  );
};

export default About;
