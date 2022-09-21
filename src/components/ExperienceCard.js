import React from "react";
import { motion } from "framer-motion";
import expImage from "../assets/images/noor.png";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <div className="px-0 lg:px-10 w-full">
        <div className="flex justify-start gap-10 xl:gap-0">
          <div className="w-1/4">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-contain  object-center"
              src={expImage}
              alt="experienceCardImage"
            />
          </div>
          <div className="flex flex-col w-3/4">
            <div>
              <h4 className="text-xl md:text-2xl xl:text-4xl font-light">
                Full Stack Developer
              </h4>
              <p className="font-bold text-xl mt-1">Oman Catering</p>
              <motion.div
                initial={{ x: 400, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex space-x-2 my-2"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={expImage}
                  alt="techImages"
                />
                <img
                  className="h-8 w-8 rounded-full"
                  src={expImage}
                  alt="techImages"
                />
                <img
                  className="h-8 w-8 rounded-full"
                  src={expImage}
                  alt="techImages"
                />
                <img
                  className="h-8 w-8 rounded-full"
                  src={expImage}
                  alt="techImages"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="uppercase py-4 font-titleFont text-gray-300">
            Started work... - Ended...
          </p>
          <ul className="list-disc space-y-2 font-bodyFont text-[14px] md:text-[16px]">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
