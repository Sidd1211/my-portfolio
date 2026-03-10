import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="bg-[#030712]/80 backdrop-blur-md border-b border-gray-800 shadow-2xl sticky top-0 z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <Link to="/" className="text-2xl font-black tracking-tighter text-white">
            SIDDHANT<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">.SINGH</span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-10">
            {["Home", "Projects", "Skills", "Experience", "Contact", "Testimonials"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-400 font-medium text-sm uppercase tracking-widest hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item}
                  {/* Neon Underline Effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#3b82f6]"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
