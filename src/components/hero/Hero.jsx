import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

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
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>WELCOME TO</motion.h1>
          <motion.div className="logoTextContainer" variants={textVariants}>
            <motion.img
              src="/MESH (10).png"
              alt="Meshcraft Text"
              className="meshcraftText"
              variants={textVariants}
            />
          </motion.div>
          <motion.ul className="horizontalList" variants={textVariants}>
            <motion.li variants={textVariants}>
              Exceptional 3D gaming assets.
            </motion.li>
            <motion.li variants={textVariants}>
              Vast collection of expert models.
            </motion.li>
            <motion.li variants={textVariants}>
              Elevate gameplay with premium assets.
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className="imageContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          {/* Include any additional image or content here */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
