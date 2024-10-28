import { motion } from "framer-motion";
import roomImage from "../assets/images/room.jpeg";
import donutImage from "../assets/images/donut.jpeg";
import houseImage from "../assets/images/house.jpeg";
import artImage from "../assets/images/art.jpeg";
import rockImage from "../assets/images/rock.jpeg";
import birdImage from "../assets/images/bird.jpeg";
import backImage from "../assets/images/background16.jpg";

const items = [
  {
    id: 1,
    title: "3D Room",
    img: roomImage,
    desc: "This modern 3D render showcases a chic living room interior featuring...",
  },
  {
    id: 2,
    title: "Donuts",
    img: donutImage,
    desc: "This delightful 3D render showcases a stack of colorful donuts...",
  },
  {
    id: 3,
    title: "3D House",
    img: houseImage,
    desc: "This stunning 3D render features a modern living room interior...",
  },
  {
    id: 4,
    title: "3D Art",
    img: artImage,
    desc: "This elegant 3D render showcases a sophisticated sofa and chair set...",
  },
  {
    id: 5,
    title: "3D Rock",
    img: rockImage,
    desc: "This captivating 3D render features a golden sword embedded...",
  },
  {
    id: 6,
    title: "3D Bird",
    img: birdImage,
    desc: "This delightful 3D render showcases a charming little bird...",
  },
];

const PortfolioItem = ({ item }) => (
  <motion.div
    className="flex flex-col md:flex-row items-center justify-center h-screen w-full p-8 bg-cover bg-center text-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    style={{
      backgroundImage: `url(${backImage})`,
    }}
  >
    <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-auto max-w-[95%] md:max-w-lg object-cover rounded-3xl shadow-lg"
      />
    </div>

    <div className="w-full md:w-1/2 p-6 text-center md:text-left">
      <h2 className="text-5xl font-extrabold text-white mb-4">{item.title}</h2>
      <p className="text-lg text-gray-300">{item.desc}</p>
    </div>
  </motion.div>
);

const Portfolio = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen w-full">
      <div className="sticky top-0 z-10 bg-opacity-90 py-10 text-center">
        <h1 className="text-6xl font-extrabold text-orange-500">Featured Works</h1>
      </div>
      {items.map((item) => (
        <div key={item.id} className="snap-start h-screen">
          <PortfolioItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;