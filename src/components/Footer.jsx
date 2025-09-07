import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-10 px-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 70,
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <div className="bg-gradient-to-r from-purple-500 to-blue-400 text-white p-2 rounded-lg">
              <Zap className="h-4 w-4" />
            </div>
            <h1 className="text-2xl font-extrabold text-purple-500">APP</h1>
          </div>
          <p className="text-sm leading-relaxed">
            Building modern web applications with love and efficiency.
            Empowering businesses with innovative technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
