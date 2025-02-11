import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="bg-gradient-to-r from-grey-900 via-orange-500 to-grey-900 shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 90 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center min-w-screen">
        {/* Logo Section */}
        <motion.h1
          className="text-3xl font-bold text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
          whileHover={{ scale: 1.2, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/">Siddhant Singh</Link>
        </motion.h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 text-white text-lg">
            {["Home", "Projects", "Skills", "Experience", "Testimonials", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-amber-400 relative group"
                >
                  {item}
                  {/* 3D Hover Effect */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
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
