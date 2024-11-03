import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import roomImage from "../assets/images/room.jpeg";
import donutImage from "../assets/images/donut.jpeg";
import houseImage from "../assets/images/house.jpeg";
import artImage from "../assets/images/art.jpeg";
import rockImage from "../assets/images/rock.jpeg";
import birdImage from "../assets/images/bird.jpeg";

const items = [
  { id: 1, title: "3D Room", img: roomImage, desc: "This modern 3D render showcases a chic living room interior..." },
  { id: 2, title: "Donuts", img: donutImage, desc: "This delightful 3D render showcases a stack of colorful donuts..." },
  { id: 3, title: "3D House", img: houseImage, desc: "This stunning 3D render features a modern living room interior..." },
  { id: 4, title: "3D Art", img: artImage, desc: "This elegant 3D render showcases a sophisticated sofa and chair set..." },
  { id: 5, title: "3D Rock", img: rockImage, desc: "This captivating 3D render features a golden sword embedded..." },
  { id: 6, title: "3D Bird", img: birdImage, desc: "This delightful 3D render showcases a charming little bird..." },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen h-full w-full bg-black overflow-hidden flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-10 pt-6">Featured Works</h1>
      
      <div className="grid grid-cols-3 gap-4 px-6 w-full max-w-screen-xl">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedItem(item)}
            layoutId={`item-${item.id}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Expansion */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key={selectedItem.id}
            className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center"
            onClick={() => setSelectedItem(null)}
            layoutId={`item-${selectedItem.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedItem.img}
              alt={selectedItem.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center p-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-5xl font-extrabold mb-4">{selectedItem.title}</h2>
              <p className="text-lg max-w-2xl">{selectedItem.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;