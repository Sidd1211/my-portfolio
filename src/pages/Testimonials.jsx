import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Award, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Senior Technical Lead",
    role: "C-DAC, Bangalore",
    content: "Siddhant's ability to architect systems that handle 100M+ records while maintaining sub-second latency is exceptional. His deep understanding of Node.js and Python automation was pivotal for our monitoring platforms.",
    tag: "System Architecture",
    rating: 5,
  },
  {
    name: "Project Manager",
    role: "Enterprise Solutions Division",
    content: "Beyond his technical prowess in React and full-stack development, Siddhant brings a level of ownership that is rare. He successfully spearheaded our migration to microservices under tight security protocols.",
    tag: "Project Leadership",
    rating: 5,
  },
  {
    name: "DevOps Architect",
    role: "HPC Cluster Management",
    content: "The automation scripts Siddhant developed for our EDA tool monitoring saved hundreds of manual hours. His Shell and Python utilities are robust, well-documented, and highly efficient.",
    tag: "Automation Expertise",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#030712] py-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Award className="text-emerald-400 w-5 h-5" />
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-[0.3em]">Social Proof</span>
          </motion.div>
          <h2 className="text-5xl font-black text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Endorsements</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto italic">
            Feedback from colleagues and leads on system performance, reliability, and technical leadership.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group bg-gray-900/40 border border-gray-800 p-8 rounded-3xl backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-8 text-gray-800 group-hover:text-blue-500/20 w-12 h-12 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 italic relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-800 pt-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700">
                  <CheckCircle2 className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{item.role}</p>
                </div>
              </div>

              {/* Skill Tag */}
              <div className="mt-6">
                <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono rounded-full uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;