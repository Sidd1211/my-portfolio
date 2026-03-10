import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Zap, 
  BrainCircuit,
  Database,
  ExternalLink
} from "lucide-react";

const projectData = [
  {
    title: "Enterprise Monitoring & Analytics Platform",
    category: "Proprietary Infrastructure",
    description: "Architected a high-performance system for real-time operational insights, handling 100M+ records with sub-second retrieval.",
    highlights: [
      "Built analytics dashboards for massive dataset visualization",
      "Engineered Python-based log parsing and reporting workflows",
      "Automated operational tasks via custom Shell scripting",
      "Designed scalable REST APIs for enterprise-grade reporting"
    ],
    tech: ["React.js", "Node.js", "Python", "MongoDB", "Shell"],
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "ReRender Dev Platform",
    category: "Developer Tools",
    description: "A high-performance utility platform for dynamic content rendering, built on modern edge-computing architecture.",
    highlights: [
      "Implemented serverless backend via Cloudflare Workers",
      "Optimized for fast global delivery and edge-based processing",
      "Built interactive developer-centric UI/UX workflows",
      "Deployed on Vercel for high-availability production"
    ],
    tech: ["React.js", "Cloudflare Workers", "JavaScript", "Vercel"],
    link: "https://rerender-dev.vercel.app/",
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Identity Workflow Sandbox",
    category: "Security & Testing",
    description: "Developed a controlled testing environment for validating complex identity generation workflows and response logic.",
    highlights: [
      "Built RESTful APIs to simulate high-concurrency request flows",
      "Implemented structured record processing for data validation",
      "Created frontend monitoring for real-time response tracking",
      "Designed secure simulation modules for identity workflows"
    ],
    tech: ["Node.js", "Express", "React.js", "MongoDB"],
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Distributed In-Memory Storage",
    category: "Systems Engineering",
    description: "A fault-tolerant, distributed key-value store designed for cluster-wide consistency across multiple nodes.",
    highlights: [
      "Implemented distributed CRUD operations with node sync",
      "Focused on high-concurrency handling and fault tolerance",
      "Optimized for low-latency memory access",
      "Architected for horizontal scalability across clusters"
    ],
    tech: ["Node.js", "Distributed Systems", "API Design"],
    icon: <Database className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "AI-Powered Mind Mapping",
    category: "Artificial Intelligence",
    description: "Collaborative brainstorming platform integrating generative AI to enhance structured idea visualization.",
    highlights: [
      "Integrated OpenAI API for intelligent idea suggestions",
      "Designed real-time collaboration features",
      "Built complex visualization for non-linear structures",
      "Implemented persistent data storage for collaborative sessions"
    ],
    tech: ["React.js", "OpenAI API", "Node.js", "MongoDB"],
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Digital Governance Workflows",
    category: "Government Systems",
    description: "Contribution to a secure governance application streamlining complex administrative data exchange.",
    highlights: [
      "Developed responsive interfaces for digital workflows",
      "Secured data exchange through optimized REST APIs",
      "Improved performance through database-level tuning",
      "Collaborated on enterprise system architecture"
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    icon: <Globe className="w-6 h-6" />,
    color: "from-slate-500 to-slate-700"
  }
];

const Projects = () => {
  return (
    <section className="bg-[#030712] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-20">
          <h2 className="text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of my work in full-stack development, systems architecture, and automation. Note: Proprietary internal projects are abstracted to respect NDA guidelines.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900/40 border border-gray-800 rounded-3xl p-6 hover:bg-gray-900/60 transition-all duration-300 hover:border-gray-700 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                  {project.icon}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div className="flex-grow">
                <span className="text-blue-500 font-mono text-[10px] tracking-widest uppercase mb-2 block font-bold">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8 border-l border-gray-800 pl-4">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-[11px] text-gray-300">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800/50">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-gray-950 border border-gray-800 text-gray-500 rounded text-[9px] font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;