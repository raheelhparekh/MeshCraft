import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import backImage from "../assets/images/black_bg.jpg";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backImage})` }}
      ></div>
      <motion.div
        ref={ref}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-12 bg-opacity-70 p-6 text-white"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="flex flex-col items-center gap-20" variants={variants}>
          <motion.h1 className="text-6xl font-extrabold md:text-7xl" variants={variants}>
            Let’s work together
          </motion.h1>
          <motion.div className="flex flex-wrap justify-center gap-16" variants={variants}>
            <motion.div className="flex items-center gap-4" variants={variants}>
              <FaEnvelope className="text-4xl" />
              <h2 className="text-xl">meshcraftassets@gmail.com</h2>
            </motion.div>
            <motion.div className="flex items-center gap-4" variants={variants}>
              <FaMapMarkerAlt className="text-4xl" />
              <h2 className="text-xl">Mumbai</h2>
            </motion.div>
            <motion.div className="flex items-center gap-4" variants={variants}>
              <FaPhone className="text-4xl" />
              <h2 className="text-xl">+91 9321576721</h2>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-8">
          <a
            href="https://www.linkedin.com/company/meshcraftassets/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl transform transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.com/invite/sUJ6hSKfYk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl transform transition-transform duration-300 hover:scale-110"
          >
            <FaDiscord />
          </a>
          <a
            href="https://www.youtube.com/@MeshCraftAssets/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl transform transition-transform duration-300 hover:scale-110"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/meshcraftassets/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl transform transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;