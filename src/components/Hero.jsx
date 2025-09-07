import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { heroImage } from "../assets";

const Hero = () => {
  return (
    <motion.div
      className="relative w-full h-[700px] flex flex-col gap-5 items-center justify-center bg-cover bg-center my-10 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 70, duration: 0.7, ease: "easeOut" }}
    >
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0eWxlfGVufDB8fDB8fHww"
        alt=""
        className="w-full h-full object-cover absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Animated Typing Text */}
      <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center z-20 uppercase">
        <ReactTyped
          strings={[
            "Welcome to Hero Section",
            "Best Products Just for You",
            "Shop the Latest Trends",
            "Unbeatable Prices & Quality",
          ]}
          typeSpeed={80}
          backSpeed={40}
          showCursor={true}
          cursorChar="|"
          loop={true}
        />
      </h1>

      <p className="relative z-20 max-w-lg text-gray-200 font-medium text-sm text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
        dignissimos optio voluptatibus qui pariatur sit distinctio culpa, natus
        repellat enim nulla! Veritatis quos doloribus laboriosam fugiat..
      </p>

      <motion.button
        className="relative z-20 bg-white text-black text-lg font-bold px-8 py-2 rounded-lg cursor-pointer"
        whileHover={{ scale: 1.1, backgroundColor: "#fde68a", color: "#000" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        SHOP NOW
      </motion.button>
    </motion.div>
  );
};

export default Hero;
