import React from "react";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <div className="h-screen max-w-screen-xl mx-auto relative flex justify-center items-center">
      <h3 className="absolute font-bodyFont top-16 sm:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full h-[80vh] mt-16 md:mt-32 flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;
