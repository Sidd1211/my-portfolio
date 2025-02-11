import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
    >
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <motion.div
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <h2 className="text-2xl font-bold">Siddhant Singh</h2>
            <p className="text-gray-400">Building a creative future, one line of code at a time.</p>
          </motion.div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.2, color: "#1DA1F2" }}
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#0A66C2" }}
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#333" }}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#BB001B" }}
              href="mailto:youremail@example.com"
              className="text-xl"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Siddhant Singh. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
