import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import roomImage from "../../assets/room.jpeg";
import donutImage from "../../assets/donut.jpeg";
import houseImage from "../../assets/house.jpeg";
import artImage from "../../assets/art.jpeg";
import rockImage from "../../assets/rock.jpeg";
import birdImage from "../../assets/bird.jpeg";

const items = [
  {
    id: 1,
    title: "3D Room",
    img: roomImage,
    desc: "This modern 3D render showcases a chic living room interior featuring a luxurious sofa and armchair set. The space is designed with contemporary aesthetics, featuring sleek furniture with beige upholstery, placed in a spacious room with a stylish staircase and large artwork. The ambient lighting enhances the cozy atmosphere, highlighting the textures and details of the furniture, making this asset ideal for high-end virtual environments.",
  },
  {
    id: 2,
    title: "Donuts",
    img: donutImage,
    desc: "This delightful 3d render showcases a stack of colorful donuts, each topped with vibrant icing and a generous sprinkling of fun, multicolored confetti. Set on a simple, elegant plate against a soft marble background, the scene captures the playful and mouth-watering essence of these sweet treats. The sunlight casts gentle shadows, enhancing the bright, glossy finish of the icing and highlighting the texture of the donuts. It's a charming and inviting depiction that instantly evokes the joy and indulgence of enjoying a freshly made donut.",
  },
  {
    id: 3,
    title: "3D House",
    img: houseImage,
    desc: "This stunning 3D render features a modern living room interior with a vibrant cityscape view. The room is tastefully decorated with contemporary furniture, including a sleek sofa, a set of stylish chairs, and a modern coffee table. The scene is illuminated by an eye-catching chandelier and a large wall-mounted TV displaying colorful visuals. The sophisticated decor, warm lighting, and detailed textures create a cozy and inviting atmosphere, perfect for virtual environments.",
  },
  {
    id: 4,
    title: "3D Art",
    img: artImage,
    desc: "This elegant 3D render showcases a sophisticated sofa and chair set, designed to bring a touch of modern comfort to any game environment. The set features a sleek three-seater sofa accompanied by a plush armchair, both adorned with textured cushions and detailed fabric materials. The soft lighting highlights the realistic textures and materials, making this asset a perfect addition for interior scenes.",
  },
  {
    id: 5,
    title: "3D Rock",
    img: rockImage,
    desc: "This captivating 3D render features a golden sword embedded in a large, rugged rock, set against a backdrop of rocky terrain and lush grass. The sword gleams with a polished metallic finish, contrasting beautifully with the textured stone. The scene is brought to life with realistic lighting and detailed textures, making it a striking and immersive visual. Perfect for fantasy-themed projects, this asset demonstrates high-quality modeling and rendering, ensuring it stands out and adds a touch of magic to any setting.",
  },
  {
    id: 6,
    title: "3D Bird",
    img: birdImage,
    desc: "This delightful 3D render showcases a charming little bird with vivid plumage and expressive eyes. Each feather is meticulously detailed, capturing the soft texture and delicate colors, from its bright beak to its tiny, intricate claws. The bird exudes a sense of whimsy and liveliness, making it an enchanting and adorable character perfect for adding a touch of charm to any project. The asset highlights exceptional modeling and rendering skills, ensuring it stands out with its lifelike appearance and captivating detail.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
