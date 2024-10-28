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
  const [currentIndex, setCurrentIndex] = useState(0);

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { ref: homeRef, path: "/", component: HomePage },
    { ref: servicesRef, path: "/services", component: ServicesPage },
    { ref: portfolioRef, path: "/portfolio", component: PortfolioPage },
    { ref: contactRef, path: "/contact", component: ContactPage },
  ];

  const scrollToSection = (index) => {
    const targetRef = sectionRefs[index]?.ref;
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(index);
    }
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
          const sectionIndex = sectionRefs.findIndex((s) => s.ref.current === entry.target);
          if (sectionIndex >= 0) {
            navigate(sectionRefs[sectionIndex].path, { replace: true });
            setCurrentIndex(sectionIndex);

            setShowScrollButton(true);
            setScrollDirection(sectionIndex === 0 ? "down" : sectionIndex === sectionRefs.length - 1 ? "up" : null);
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
      <Sidebar />

      {/* Sections */}
      {sectionRefs.map(({ ref, component: Component }, index) => (
        <section key={index} ref={ref} className="h-screen snap-start">
          <Component />
        </section>
      ))}

      {/* Scroll button */}
      {showScrollButton && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => {
              if (scrollDirection === "down") {
                scrollToSection(currentIndex + 1);
              } else if (scrollDirection === "up") {
                scrollToSection(currentIndex - 1);
              }
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