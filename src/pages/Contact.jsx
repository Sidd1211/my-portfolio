import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaYoutube, 
  FaTwitter, 
  FaEnvelope, 
  FaDiscord,
  FaCopy 
} from "react-icons/fa";
import { Send, MapPin } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "siddhantkumarsingh1211@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/siddhantkumarsingh", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: <FaGithub />, link: "https://github.com/Sidd1211", label: "GitHub", color: "hover:text-[#f8fafc]" },
    { icon: <FaYoutube />, link: "#", label: "YouTube", color: "hover:text-[#FF0000]" },
    { icon: <FaTwitter />, link: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: <FaDiscord />, link: "#", label: "Discord", color: "hover:text-[#5865F2]" },
  ];

  return (
    <section className="bg-[#030712] min-h-screen py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h2 className="text-5xl font-black text-white tracking-tight mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Touch</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Interactive Social & Info Cards */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-bold text-white mt-1">{email}</p>
                </div>
              </div>
              <button 
                onClick={copyToClipboard}
                className="text-gray-500 hover:text-blue-400 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <span className="text-xs text-emerald-400 font-mono">Copied!</span> : <FaCopy />}
              </button>
            </motion.div>

            {/* Social Icon Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                  className={`bg-gray-900/40 border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-2xl text-gray-400 transition-all ${social.color}`}
                >
                  {social.icon}
                  <span className="text-[10px] font-mono uppercase tracking-tighter text-gray-500">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl flex items-center gap-6">
              <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Base</p>
                <p className="text-lg font-bold text-white mt-1">Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Right: Modern Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-900/20 border border-gray-800/50 p-8 rounded-3xl backdrop-blur-xl shadow-2xl"
          >
            <form className="space-y-5">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
              <textarea 
                rows="4"
                placeholder="Message"
                className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
              ></textarea>
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;