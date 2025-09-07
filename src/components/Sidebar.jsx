import { motion } from "framer-motion";
import { Home, User, Info, Phone, Menu, X, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, close }) => {
  return (
    <div className="relative">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col z-40"
      >
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-1">
            <div className="bg-gradient-to-r from-purple-500 to-blue-400 text-white p-2 rounded-lg">
              <Zap className="h-4 w-4" />
            </div>
            <h1 className="text-2xl font-extrabold text-purple-500">APP</h1>
          </div>
          <div onClick={close} className="border border-gray-400 p-2 rounded-full">
            <X className="h-5 w-5" />
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={close}
          >
            <Home className="w-5 h-5" /> HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={close}
          >
            <Info className="w-5 h-5" /> ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={close}
          >
            <Phone className="w-5 h-5" /> CONTACT
          </NavLink>
        </nav>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
