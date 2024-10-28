import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sidebarVariants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Sidebar = ({ onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { name: "Homepage", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div
      className={`fixed top-0 left-0 z-20 h-screen w-screen bg-white text-black ${
        isOpen ? "flex" : "hidden"
      } lg:flex flex-col items-center justify-center`}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      variants={sidebarVariants}
    >
      {/* Sidebar Background Animation */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white lg:w-48"
        variants={sidebarVariants}
      >
        {/* Links Container */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8 h-full text-center"
          variants={sidebarVariants}
        >
          {items.map((item) => (
            <motion.div
              key={item.name}
              className="text-4xl lg:text-2xl"
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => {
                  onLinkClick(item.path); // Pass path to parent handler
                  setIsOpen(false); // Close sidebar on link click
                }}
                className="hover:text-orange-500"
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-6 left-6 z-30 w-12 h-12 bg-transparent border-none cursor-pointer"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
            animate={isOpen ? "open" : "closed"}
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default Sidebar;