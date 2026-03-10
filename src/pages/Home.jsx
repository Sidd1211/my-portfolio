import React from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Cpu, Database } from "lucide-react";
import BGImage from "../assets/images/me_bw.jpg";
import BGImageR from "../assets/images/me_red.jpg";
import AMImage from "../assets/images/IMG_20200131_063804.jpg";

function HomePage() {
  return (
    <div className="bg-[#030712] text-white overflow-hidden">
      {/* Fade-in Overlay at Top */}
      <div className="absolute inset-0 top-0 h-48 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* Hero Section with Enhanced Parallax */}
      <Parallax
        bgImage={BGImage}
        bgImageAlt="Hero Background"
        // Lowered strength slightly to show more image, and set objectPosition
        strength={180} 
        bgImageStyle={{
          width: '100vw',
          height: '100vh',
          objectFit: "cover",
          // Centralizes the image so edges aren't cut off prematurel
          objectPosition: "center 40%", 
          filter: "brightness(0.9) contrast(1.1)",
          willChange: 'transform',
        }}
        className="h-screen"
      >
        <div className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-4 px-5 py-1.5 border border-blue-500/40 bg-blue-950/20 backdrop-blur-sm rounded-full text-blue-300 font-mono text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.1)]"
          >
            Available for New Opportunities
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-7 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            SIDDHANT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-shadow-glow">SINGH</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-medium leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Architecting high-performance enterprise systems and scalable full-stack solutions at <span className="text-white font-semibold">C-DAC</span>.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-9 py-4.5 rounded-2xl font-bold shadow-lg shadow-blue-500/25 flex items-center gap-2.5 transition-shadow duration-300"
              >
                View Portfolio <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/experience">
              <motion.button
                whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-transparent border border-gray-700 px-9 py-4.5 rounded-2xl font-bold text-gray-300 hover:text-white transition-all duration-300"
              >
                Experience
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </Parallax>

      {/* About Me Section */}
      <section className="py-36 relative bg-[#030712] border-t border-gray-900">
        {/* Subtle Background Glow behind text */}
        <div className="absolute inset-0 left-1/2 w-[500px] h-[500px] bg-emerald-950/30 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Profile Image with Enhanced Frame */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="absolute -inset-5 bg-gradient-to-tr from-blue-500/30 to-emerald-500/30 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-700"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                src={AMImage}
                alt="Profile"
                className="w-full h-full object-cover grayscale transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* About Me Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              className="text-sm font-mono text-emerald-400 tracking-widest uppercase mb-5 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              01. Introduction
            </motion.h2>
            <motion.h3
              className="text-4xl md:text-5xl font-black text-white mb-9 tracking-tightleading-snug"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Building the backbone of <br />
              <span className="text-gray-600">Modern Infrastructure.</span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-400 leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              With over 4 years of experience at a National R&D center, I specialize in 
              high-concurrency systems, HPC monitoring, and enterprise automation. I bridge 
              the gap between complex backend logic and intuitive frontend interfaces.
            </motion.p>
            <div className="flex justify-center lg:justify-start gap-10 text-gray-500 font-medium">
               <div className="flex flex-col items-center lg:items-start group">
                  <span className="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">4+</span>
                  <span className="text-xs uppercase tracking-wider">Years Exp.</span>
               </div>
               <div className="flex flex-col items-center lg:items-start group">
                  <span className="text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">100M+</span>
                  <span className="text-xs uppercase tracking-wider">Records Handled</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Specializations Section with Enhanced Parallax and Card Styling */}
      <Parallax
        bgImage={BGImageR}
        strength={160} // Lowered to maintain image visibility and reduce cutting
        bgImageStyle={{ 
          objectFit: "cover",
          objectPosition: "center 30%", // Anchors image focus
          filter: "brightness(0.3) saturate(0.6) contrast(1.1)" 
        }}
        className="py-36 relative border-t border-b border-gray-900"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-18">
            <h2 className="text-4xl font-black text-white tracking-tight text-center">
              CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">SPECIALIZATIONS</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 mt-5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-6xl mx-auto">
            {[
              { 
                icon: <Terminal size={28}/>, 
                title: "Automation", 
                desc: "Custom Python & Shell scripts for high-stakes log analysis.",
                color: "text-blue-400",
                bgColor: "bg-blue-500/15"
              },
              { 
                icon: <Cpu size={28}/>, 
                title: "HPC Systems", 
                desc: "Monitoring and managing licenses for complex EDA clusters.",
                color: "text-emerald-400",
                bgColor: "bg-emerald-500/15"
              },
              { 
                icon: <Database size={28}/>, 
                title: "Scalability", 
                desc: "Optimizing MongoDB and MySQL for millions of records.",
                color: "text-cyan-400",
                bgColor: "bg-cyan-500/15"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-950/70 backdrop-blur-xl border border-gray-800 p-9 rounded-3xl group transition-all duration-300 ease-out flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, borderColor: skill.color.replace('text-', 'rgba(').replace('400', ',0.5)') }}
              >
                <div className={`${skill.color} mb-7 ${skill.bgColor} w-fit p-4 rounded-2xl group-hover:scale-105 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                <div className={`h-1 w-0 ${skill.color.replace('text-', 'bg-')} rounded-full mt-6 group-hover:w-16 transition-all duration-500 ease-out`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default HomePage;