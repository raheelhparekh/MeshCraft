import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

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
    <div className="contact-container">
      <div className="parallax"></div> {/* Background image */}
      <motion.div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Let’s work together</motion.h1>
          <motion.div className="infoContainer" variants={variants}>
            <motion.div className="item" variants={variants}>
              <span className="material-icons icon">email</span>
              <div>
                <h2>meshcraftassets@gmail.com</h2>
              </div>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <span className="material-icons icon">location_on</span>
              <div>
                <h2>Mumbai</h2>
              </div>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <span className="material-icons icon">phone</span>
              <div>
                <h2>+91 9321576721</h2>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <div className="socialMediaContainer">
          <a
            href="https://www.linkedin.com/company/meshcraftassets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.jpg" alt="LinkedIn" />
          </a>
          <a
            href="https://discord.com/invite/sUJ6hSKfYk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Discord.jpg" alt="Discord" />
          </a>
          <a
            href="https://www.youtube.com/@MeshCraftAssets/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/youtube.png" alt="YouTube" />
          </a>
          <a
            href="https://www.instagram.com/meshcraftassets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
