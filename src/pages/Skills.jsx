import React from "react";
import { motion } from "framer-motion";
import { Wrench, Code, Database, Layers, Terminal, Server, Shield, Settings } from "lucide-react";

const skillsData = [
  {
    category: "Full-Stack Development",
    percentage: 95,
    icon: <Wrench className="w-8 h-8" />,
    color: "text-blue-500",
    barColor: "bg-blue-500",
  },
  {
    category: "React.js & Front-End",
    percentage: 90,
    icon: <Code className="w-8 h-8" />,
    color: "text-purple-500",
    barColor: "bg-purple-500",
  },
  {
    category: "Node.js & Back-End",
    percentage: 90,
    icon: <Server className="w-8 h-8" />,
    color: "text-green-500",
    barColor: "bg-green-500",
  },
  {
    category: "RESTful API Development",
    percentage: 95,
    icon: <Terminal className="w-8 h-8" />,
    color: "text-yellow-500",
    barColor: "bg-yellow-500",
  },
  {
    category: "Database Management",
    percentage: 90,
    icon: <Database className="w-8 h-8" />,
    color: "text-teal-500",
    barColor: "bg-teal-500",
  },
  {
    category: "System Design",
    percentage: 85,
    icon: <Layers className="w-8 h-8" />,
    color: "text-red-500",
    barColor: "bg-red-500",
  },
  {
    category: "DevOps & CI/CD",
    percentage: 80,
    icon: <Settings className="w-8 h-8" />,
    color: "text-indigo-500",
    barColor: "bg-indigo-500",
  },
  {
    category: "Testing & Quality",
    percentage: 85,
    icon: <Shield className="w-8 h-8" />,
    color: "text-pink-500",
    barColor: "bg-pink-500",
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-950 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical Expertise
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className={`${skill.color} p-3 bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-100 leading-tight">
                    {skill.category}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Expertise
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium">Proficiency</span>
                  <span className="text-white font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`${skill.barColor} h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
