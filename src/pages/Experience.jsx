import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  LineChart, 
  Layers, 
  ExternalLink,
  CheckCircle2
} from "lucide-react";

const experiences = [
  {
    title: "Project Engineer (Full-Stack Developer)",
    company: "C-DAC",
    location: "Bangalore, India",
    duration: "Sep 2022 – Present",
    description: "Architecting scalable enterprise monitoring and analytics platforms.",
    highlights: [
      "Built high-performance dashboards processing 100M+ records for large-scale data visualization.",
      "Engineered Python automation for log analysis, aggregation, and complex reporting workflows.",
      "Optimized system performance via API tuning, async processing, and advanced caching strategies.",
      "Collaborated with infra teams on production debugging and performance tuning."
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Python", "Shell", "MySQL"],
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Project Associate (Full-Stack Developer)",
    company: "C-DAC",
    location: "Bangalore, India",
    duration: "Jul 2021 – Sep 2022",
    description: "Developing responsive interfaces and robust backend service integrations.",
    highlights: [
      "Developed enterprise web interfaces using React.js and Tailwind CSS for seamless UX.",
      "Maintained RESTful APIs and integrated services across multiple government platforms.",
      "Optimized MongoDB/MySQL schemas, significantly improving large data operation efficiency.",
      "Automated deployment workflows using custom Shell scripting and Python utilities."
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JavaScript"],
    icon: <Terminal className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-400"
  }
];

const Experience = () => {
  return (
    <section className="bg-[#030712] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-5xl font-extrabold text-white tracking-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Experience</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl text-lg">
              Over 4 years of experience building mission-critical enterprise applications and automation systems at C-DAC.
            </p>
          </div>
          <div className="flex gap-3">
             <div className="h-12 w-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-blue-400">
                <Database className="w-6 h-6" />
             </div>
             <div className="h-12 w-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-emerald-400">
                <Cpu className="w-6 h-6" />
             </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 hover:bg-gray-900/60 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  
                  {/* Left Column: Metadata */}
                  <div className="lg:w-1/3">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${exp.color} text-white mb-6 shadow-lg`}>
                      {exp.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold mb-4">{exp.company}</p>
                    
                    <div className="space-y-2 text-sm text-gray-400 font-medium">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                        {exp.location}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-xs font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-gray-800 pt-8 lg:pt-0 lg:pl-8">
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {exp.highlights.map((item, i) => (
                        <div key={i} className="flex gap-3 group/item">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Performance Insight (Conditional) */}
                    {index === 0 && (
                      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center gap-4">
                        <LineChart className="text-blue-400 w-8 h-8" />
                        <div>
                          <p className="text-blue-100 text-sm font-bold">Performance Milestone</p>
                          <p className="text-blue-300/80 text-xs">Successfully optimized systems to handle 100M+ data entries with sub-second retrieval times.</p>
                        </div>
                      </div>
                    )}
                  </div>

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
