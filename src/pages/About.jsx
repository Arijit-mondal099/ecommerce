import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-5 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-7xl mx-auto">
        <motion.div
          className="w-full h-full flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJvdXR8ZW58MHx8MHx8fDA%3D"
            alt="About"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full flex flex-col items-start px-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          <h2 className="text-4xl font-extrabold text-gray-600 mb-4">
            About Us
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Welcome to <span className="font-semibold">Our App</span>! We are
            passionate about delivering the best products and services to our
            customers. Our mission is to make your shopping experience easy,
            enjoyable, and reliable. We are passionate about delivering the best
            products and services to our customers. Our mission is to make your
            shopping experience easy, enjoyable, and reliable.
          </p>
          <p className="text-gray-500 leading-relaxed mb-6">
            With a dedicated team and a commitment to innovation, we strive to
            provide high-quality items that suit your lifestyle. Thank you for
            choosing us—we look forward to growing together with you! choosing
            us—we look forward to growing together with you!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-purple-700 cursor-pointer"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          type: "spring",
          stiffness: 100,
        }}
      >
        <h3 className="text-2xl font-bold text-gray-400 mb-2">Our Story</h3>
        <p className="text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec
          dictum urna quam nec urna. Etiam euismod, velit vel tincidunt dictum,
          sapien urna pretium enim, at cursus enim massa non urna.
        </p>
        <h3 className="text-2xl font-bold text-gray-400 mb-2">Our Vision</h3>
        <p className="text-gray-300 mb-4">
          Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget
          libero posuere vulputate. Etiam elit elit, elementum sed varius at,
          adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed,
          ultricies sapien.
        </p>
        <h3 className="text-2xl font-bold text-gray-400 mb-2">Our Values</h3>
        <p className="text-gray-300">
          Proin ac neque rutrum, convallis dolor nec, pretium enim. Integer
          euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec
          dictum urna quam nec urna. Etiam euismod, velit vel tincidunt dictum,
          sapien urna pretium enim.
        </p>
        <h3 className="text-2xl font-bold text-gray-400 mb-2">Our Values</h3>
        <p className="text-gray-300">
          Proin ac neque rutrum, convallis dolor nec, pretium enim. Integer
          euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec
          dictum urna quam nec urna. Etiam euismod, velit vel tincidunt dictum,
          sapien urna pretium enim.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
