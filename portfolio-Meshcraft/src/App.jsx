import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Import single icon for up/down
import Sidebar from "./components/SideBar";
import Cursor from "./components/Cursor";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const navigate = useNavigate();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { ref: homeRef, path: "/" },
    { ref: servicesRef, path: "/services" },
    { ref: portfolioRef, path: "/portfolio" },
    { ref: contactRef, path: "/contact" },
  ];

  // Scroll to specific section when clicking on sidebar link
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Sidebar click handler for smooth scrolling
  const handleSidebarClick = (path) => {
    const section = sectionRefs.find((s) => s.path === path);
    if (section && section.ref.current) {
      scrollToSection(section.ref); // Trigger smooth scroll
    }
    navigate(path, { replace: true }); // Update route in URL
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sectionRefs.find((s) => s.ref.current === entry.target);
          if (section) {
            navigate(section.path, { replace: true });
            setShowScrollButton(section.path === "/" || section.path === "/contact");

            // Set scroll direction based on section
            if (section.path === "/") setScrollDirection("down");
            else if (section.path === "/contact") setScrollDirection("up");
            else setScrollDirection(null);
          }
        }
      });
    }, observerOptions);

    sectionRefs.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sectionRefs.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, [navigate]);

  return (
    <div className="relative scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <Cursor />
      <Sidebar onLinkClick={handleSidebarClick} />

      {/* Sections */}
      <section ref={homeRef} className="h-screen snap-start">
        <HomePage />
      </section>
      <section ref={servicesRef} className="h-screen snap-start">
        <ServicesPage />
      </section>
      <section ref={portfolioRef} className="h-screen snap-start">
        <PortfolioPage />
      </section>
      <section
        ref={contactRef}
        className="min-h-[50vh] snap-start flex items-center justify-center bg-gray-900 text-white"
      >
        <ContactPage />
      </section>

      {/* Scroll button */}
      {showScrollButton && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => {
              scrollDirection === "down" ? scrollToSection(servicesRef) : scrollToSection(homeRef);
            }}
            className="p-3 rounded-full bg-black text-white transition"
          >
            {scrollDirection === "down" ? <FaArrowDown size={20} /> : <FaArrowUp size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;