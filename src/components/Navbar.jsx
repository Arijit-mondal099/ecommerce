import { LogIn, MenuIcon, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./Sidebar";

const links = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT US" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.header
      className="flex items-center justify-between py-4 border-b border-gray-200"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
    >
      <motion.div
        className="flex items-center gap-1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <div className="bg-gradient-to-r from-purple-500 to-blue-400 text-white p-2 rounded-lg">
          <Zap className="h-4 w-4" />
        </div>
        <h1 className="text-2xl font-extrabold text-purple-500">APP</h1>
      </motion.div>

      {/* Nav */}
      <nav className="hidden md:flex space-x-2 text-sm font-semibold border border-gray-600 rounded-full px-2 py-2 relative">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `relative px-4 py-1 rounded-full ${
                isActive ? "text-white" : "text-gray-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeBg"
                    className="absolute inset-0 bg-gray-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {link.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Login Button */}
      <motion.button
        type="button"
        className="hidden md:flex items-center gap-2 border border-gray-600 rounded-full px-6 py-2 text-sm font-medium cursor-pointer text-gray-600"
        whileHover={{ scale: 1.07, background: "#212121", color: "#FFF" }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Login</span>
        <LogIn className="w-4 h-4" />
      </motion.button>

      {/* Mobile Menu */}
      {!isSidebarOpen && <div className="md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <MenuIcon className="h-8 w-8 text-gray-600" />
      </div>}

      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} close={() => setIsSidebarOpen(false)} />}
    </motion.header>
  );
};

export default Navbar;
