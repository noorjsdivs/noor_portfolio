import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/noor2.JPG";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen max-w-screen-xl mx-auto relative flex justify-center items-center"
    >
      <h3 className="absolute font-bodyFont top-16 sm:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-between px-6 lg:px-0">
        <div className="mt-12 md:mt-0 flex-shrink-0">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-32 h-32 shadow-2xl shadow-gray-900 sm:w-48 sm:h-48 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[400px]"
            src={aboutImage}
            alt="aboutImage"
          />
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex md:px-0"
        >
          <p className="font-bodyFont text-justify text-base px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quo
            omnis consectetur perspiciatis 🌟 facere numquam qui officiis, sequi
            sapiente quam distinctio et magni laudantium vero at quisquam minus
            aperiam eligendi, ex dicta eaque 🌙 adipisci voluptatum. Sint odio,
            adipisci at ex magni consequuntur quas non, est rerum rem tenetur
            itaque minima! Lorem ✉️ ipsum dolor sit amet consectetur,
            adipisicing elit. Perspiciatis maxime rem, tempore vero dolor
            delectus quidem nobis expedita aliquam obcaecati. 🎣 Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Impedit, consequuntur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            veniam.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
