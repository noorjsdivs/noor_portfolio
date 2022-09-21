import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";

const Prime = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200/40 scrollbar-thumb-[#111827]/80">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
    </div>
  );
};

export default Prime;
