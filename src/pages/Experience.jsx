import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Server, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Project Engineer",
    company: "CDAC, Bangalore",
    duration: "Sep 2022 - Present",
    location: "Bangalore, India",
    impact: [
      "Architected and deployed enterprise-grade full-stack solutions, reducing system latency by 25% through optimized React rendering and Node.js middleware.",
      "Spearheaded the migration to a microservices architecture, enhancing system scalability and allowing for 40% faster feature deployment cycles.",
      "Engineered automated CI/CD pipelines and testing suites (Jest/Cypress), achieving 90%+ code coverage and reducing production bugs by 30%.",
      "Directed high-level system design sessions, implementing Redis caching strategies that cut database load by 15% during peak traffic.",
    ],
    icon: <Code className="text-blue-400 w-6 h-6" />,
    color: "border-blue-500",
    glow: "shadow-blue-500/20"
  },
  {
    title: "Project Associate",
    company: "CDAC, Bangalore",
    duration: "Jul 2021 - Sep 2022",
    location: "Bangalore, India",
    impact: [
      "Developed responsive, high-performance user interfaces using React.js and Tailwind CSS, improving mobile user engagement by 20%.",
      "Built and documented robust RESTful APIs with Node.js/Express, facilitating seamless integration for 3rd-party government service portals.",
      "Streamlined database schemas in MongoDB/MySQL, resulting in a 15% improvement in complex query execution times.",
      "Resolved 50+ critical production bottlenecks through proactive debugging and performance profiling of server-side logic.",
    ],
    icon: <Server className="text-emerald-400 w-6 h-6" />,
    color: "border-emerald-500",
    glow: "shadow-emerald-500/20"
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-950 min-h-screen py-24 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20 text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500 font-mono tracking-widest uppercase text-sm"
          >
            02. History
          </motion.span>
          <h2 className="text-5xl font-black text-white mt-2 mb-4 italic">
            Where I've Built.
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full"></div>
        </header>

        <div className="relative border-l border-gray-800 ml-4 md:ml-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-16 ml-10 relative"
            >
              {/* Timeline Indicator */}
              <div className={`absolute -left-[57px] top-0 p-3 bg-gray-950 border border-gray-800 rounded-full z-10 shadow-xl group`}>
                <div className={`transition-transform duration-300 group-hover:scale-110`}>
                  {exp.icon}
                </div>
              </div>

              {/* Experience Card */}
              <div className={`group bg-gray-900/30 border border-gray-800/50 p-8 rounded-3xl hover:bg-gray-900/60 transition-all duration-500 hover:border-gray-600 shadow-2xl ${exp.glow}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-blue-400 font-bold text-xl">{exp.company}</span>
                      <span className="hidden md:block h-1 w-1 bg-gray-600 rounded-full"></span>
                      <span className="text-gray-500 font-medium flex items-center gap-1 italic">
                         Full-Stack Focus
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end text-sm font-mono text-gray-400">
                    <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700 mb-2 text-blue-300">
                      <Calendar className="w-3.5 h-3.5" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-2 text-gray-500 px-3">
                      <MapPin className="w-3.5 h-3.5" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.impact.map((achieve, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {achieve}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
