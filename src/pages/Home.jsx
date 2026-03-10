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
      {/* Hero Section with Parallax */}
      <Parallax
        bgImage={BGImage}
        bgImageAlt="Hero Background"
        strength={200}
        bgImageStyle={{
          objectFit: "cover",
          filter: "brightness(0.4)",
        }}
        className="h-screen"
      >
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 px-4 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-400 font-mono text-xs uppercase tracking-widest"
          >
            Available for New Opportunities
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SIDDHANT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-shadow-glow">SINGH</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Architecting high-performance enterprise systems and scalable full-stack solutions at <span className="text-white">C-DAC</span>.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 flex items-center gap-2"
              >
                View Portfolio <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/experience">
              <motion.button
                whileHover={{ scale: 1.05, border: "1px solid rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-gray-700 px-8 py-4 rounded-2xl font-bold text-gray-300 hover:text-white transition-all"
              >
                Experience
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </Parallax>

      {/* About Me Section */}
      <section className="py-32 relative bg-[#030712]">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image with Styled Frame */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src={AMImage}
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* About Me Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              className="text-sm font-mono text-emerald-400 tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              01. Introduction
            </motion.h2>
            <motion.h3
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Building the backbone of <br />
              <span className="text-gray-500">Modern Infrastructure.</span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              With over 4 years of experience at a National R&D center, I specialize in 
              high-concurrency systems, HPC monitoring, and enterprise automation. I bridge 
              the gap between complex backend logic and intuitive frontend interfaces.
            </motion.p>
            <div className="flex justify-center lg:justify-start gap-8 text-gray-500 italic">
               <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-white">4+</span>
                  <span className="text-xs uppercase">Years Exp.</span>
               </div>
               <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-white">100M+</span>
                  <span className="text-xs uppercase">Records Handled</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Experience Section with Parallax */}
      <Parallax
        bgImage={BGImageR}
        strength={200}
        bgImageStyle={{ filter: "brightness(0.3) saturate(0.5)" }}
        className="py-32"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-black text-white tracking-tight text-center">
              CORE <span className="text-blue-500">SPECIALIZATIONS</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: <Terminal />, 
                title: "Automation", 
                desc: "Custom Python & Shell scripts for high-stakes log analysis." 
              },
              { 
                icon: <Cpu />, 
                title: "HPC Systems", 
                desc: "Monitoring and managing licenses for complex EDA clusters." 
              },
              { 
                icon: <Database />, 
                title: "Scalability", 
                desc: "Optimizing MongoDB and MySQL for millions of records." 
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="text-blue-400 mb-6 bg-blue-500/10 w-fit p-4 rounded-2xl">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default HomePage;