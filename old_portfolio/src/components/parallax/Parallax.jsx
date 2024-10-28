import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const backgroundImage = type === "services" ? "/background21.jpg" : "/background22.jpg";

  return (
    <div className="parallax" ref={ref} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "Who are we?" : "Our Work"}
      </motion.h1>
    </div>
  );
};

export default Parallax;
