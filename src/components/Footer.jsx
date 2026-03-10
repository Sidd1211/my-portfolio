import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="bg-[#030712] border-t border-gray-800 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Logo and Tagline */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-black tracking-tighter mb-2">
              SIDDHANT<span className="text-blue-500">.SINGH</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer specializing in high-performance enterprise systems and automation at C-DAC. 
              Founder of <span className="text-gray-200">FactFusion</span>.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500">Navigation</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">Experience</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Connect</h3>
            <div className="flex space-x-5">
              <motion.a
                whileHover={{ y: -5, color: "#0A66C2" }}
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: "#f8fafc" }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: "#FF0000" }}
                href="https://youtube.com/@FactFusion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 transition-colors"
              >
                <FaYoutube />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: "#3b82f6" }}
                href="mailto:your.email@example.com"
                className="text-2xl text-gray-400 transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
          <p>&copy; {new Date().getFullYear()} Siddhant Singh. Built with React & Framer Motion.</p>
          <div className="flex space-x-6 uppercase tracking-tighter">
            <span>Bangalore, India</span>
            <span className="text-gray-700">|</span>
            <span>NDA Protected</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;