import React from "react";
import { motion } from "framer-motion";
import birdImage from "../assets/images/background8.jpeg";
import logo from "../assets/images/MESH.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div 
      className="relative flex items-center justify-center h-screen w-full bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${birdImage})` }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg text-center p-4">
        
        {/* Main Text Animation */}
        <motion.div
          className="flex flex-col items-center justify-center gap-10 p-8"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="text-4xl font-bold md:text-2xl mt-20" variants={textVariants}>
            WELCOME TO
          </motion.h1>

          {/* Logo Image Animation */}
          <motion.div 
            className="flex items-center justify-center -mt-40" 
            variants={textVariants}
          >
            <motion.img
              src={logo}
              alt="Meshcraft Text"
              className="w-auto h-[500px] md:h-40"
              initial={{ opacity: 0, scale: 0.8 }} // Add initial opacity and scale for smoother animation
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Description List Animation */}
          <motion.ul 
            className="flex flex-wrap justify-center gap-6 -mt-60 md:-mt-10" 
            variants={textVariants}
          >
            {["Exceptional 3D gaming assets.", "Vast collection of expert models.", "Elevate gameplay with premium assets."].map((text, index) => (
              <motion.li 
                key={index}
                className="text-lg font-serif text-white md:text-base"
                variants={textVariants}
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          className="flex items-center justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Additional image or content can go here */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;