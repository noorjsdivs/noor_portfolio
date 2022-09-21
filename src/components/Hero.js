import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import heroImage from "../assets/images/noor.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hello, from Noor_Mohammad-the code lover",
      "Love to code.js/jsx/tsx/",
      "<noor.jsdivs@happycoding.io />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        <img src={heroImage} alt="heroImage" />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack Developer
        </h2>
        <h1 className="text-4xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#fb923c" />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>

          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>

          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
