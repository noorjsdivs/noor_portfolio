import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto flex justify-between items-start p-5 top-0 sticky">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex gap-2 items-center justify-start"
      >
        <SocialIcon
          className="headerSocialIcon"
          url="https://github.com"
          fgColor="#6b7280"
          bgColor="transparent"
        />
        <SocialIcon
          className="headerSocialIcon"
          url="https://youtube.com"
          fgColor="#6b7280"
          bgColor="transparent"
        />
        <SocialIcon
          className="headerSocialIcon"
          url="https://linkedin.com"
          fgColor="#6b7280"
          bgColor="transparent"
        />
        <SocialIcon
          className="headerSocialIcon"
          url="https://facebook.com"
          fgColor="#6b7280"
          bgColor="transparent"
        />
        <SocialIcon
          className="headerSocialIcon"
          url="https://instagram.com"
          fgColor="#6b7280"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex justify-start items-center cursor-pointer"
      >
        <SocialIcon
          className="headerSocialIcon"
          network="email"
          fgColor="#6b7280"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
