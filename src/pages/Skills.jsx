import { Wrench, Code, Database, Layers, Terminal, Server, Shield, Settings } from "lucide-react";

const skillsData = [
  {
    category: "Full-Stack Development",
    percentage: 95,
    icon: <Wrench className="text-blue-500 w-8 h-8" />,
  },
  {
    category: "React.js & Front-End Technologies",
    percentage: 90,
    icon: <Code className="text-purple-500 w-8 h-8" />,
  },
  {
    category: "Node.js & Back-End Development",
    percentage: 90,
    icon: <Server className="text-green-500 w-8 h-8" />,
  },
  {
    category: "RESTful API Development",
    percentage: 95,
    icon: <Terminal className="text-yellow-500 w-8 h-8" />,
  },
  {
    category: "Database Management (MySQL, MongoDB)",
    percentage: 90,
    icon: <Database className="text-teal-500 w-8 h-8" />,
  },
  {
    category: "System Design & Architecture",
    percentage: 85,
    icon: <Layers className="text-red-500 w-8 h-8" />,
  },
  {
    category: "Deployment & DevOps (Docker, Kubernetes, CI/CD)",
    percentage: 80,
    icon: <Settings className="text-indigo-500 w-8 h-8" />,
  },
  {
    category: "Testing & Code Quality (Jest, SonarQube, Load Testing)",
    percentage: 85,
    icon: <Shield className="text-pink-500 w-8 h-8" />,
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-white mb-10">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg flex items-center space-x-4">
            {skill.icon}
            <div>
              <h2 className="text-lg font-semibold text-white">{skill.category}</h2>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400 mt-1">{skill.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
