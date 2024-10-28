import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import backgroundImg from "../assets/images/aboutusbg.jpg"; // Adjust path as needed

const Services = () => {
  return (
    <div
      className="relative w-full h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory"
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 z-0" />

      {/* Content Sections */}
      <div className="relative z-10 flex flex-col items-center text-white pt-24">
        {["About Us", "What We Do", "Why Choose Us"].map((title, index) => (
          <Section key={index} title={title} index={index} />
        ))}
      </div>
    </div>
  );
};

// Section Component
const Section = ({ title, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="w-full h-screen flex flex-col items-center justify-center text-center px-6 scroll-snap-start"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      <h1 className="text-5xl font-bold mb-6">{title}</h1>
      <p className="text-lg max-w-2xl">
        {index === 0
          ? "Dedicated professionals creating top-tier 3D assets with a global audience focus."
          : index === 1
          ? "Offering a diverse 3D asset library, customization services, and expert guidance."
          : "Focused on quality assurance, customer-centric approaches, and community engagement."}
      </p>
      <ul className="text-lg list-disc list-inside mt-4">
        {index === 0 ? (
          <>
            <li>Dedicated professionals</li>
            <li>Top-tier 3D assets</li>
            <li>Cutting-edge creativity</li>
            <li>Global audience focus</li>
          </>
        ) : index === 1 ? (
          <>
            <li>Diverse 3D asset library</li>
            <li>Customization services</li>
            <li>Expert support & guidance</li>
            <li>Precision & creativity</li>
          </>
        ) : (
          <>
            <li>Exceptional quality assurance</li>
            <li>Customer-centric approach</li>
            <li>Community engagement</li>
            <li>Innovation-driven</li>
          </>
        )}
      </ul>
    </motion.section>
  );
};

export default Services;