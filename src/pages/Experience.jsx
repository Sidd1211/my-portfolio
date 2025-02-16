import { Briefcase, Code, Server } from "lucide-react";

const experiences = [
  {
    title: "Project Engineer",
    company: "CDAC, Bangalore",
    duration: "Sep 2022 - Present",
    location: "Bangalore, India",
    achievements: [
      "Demonstrated expertise in full-stack development by taking ownership of end-to-end project implementations.",
      "Led the design and development of complex web applications, considering scalability, security, and performance aspects.",
      "Implemented automated testing processes and frameworks to ensure code quality and reduce regression issues.",
      "Conducted periodic code refactoring and optimizations to improve maintainability and readability.",
      "Optimized application performance by analyzing and fine-tuning database queries, server configurations, and caching strategies.",
      "Participated in code reviews and provided constructive feedback to improve code quality and maintainability.",
    ],
    icon: <Code className="text-blue-500 w-8 h-8" />,
  },
  {
    title: "Project Associate",
    company: "CDAC, Bangalore",
    duration: "Jul 2021 - Sep 2022",
    location: "Bangalore, India",
    achievements: [
      "Collaborated with the development team to design and develop web applications using various frontend and backend technologies.",
      "Assisted in requirements gathering and analysis to understand client needs and translate them into technical specifications.",
      "Implemented responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript frameworks like React.",
      "Developed server-side logic and APIs using Node.js, Express, or similar frameworks to facilitate data retrieval and manipulation.",
      "Integrated third-party APIs and services to enhance the functionality of web applications.",
      "Assisted in troubleshooting and debugging issues, ensuring timely resolution to minimize application downtime.",
    ],
    icon: <Server className="text-green-500 w-8 h-8" />,
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Work Experience</h1>
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative border-l-4 border-blue-500">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 flex items-start">
              <div className="absolute -left-6 bg-gray-800 p-3 rounded-full shadow-lg">
                {exp.icon}
              </div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full">
                <h2 className="text-lg font-semibold text-white">{exp.title}</h2>
                <p className="text-blue-400 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm">{exp.location} | {exp.duration}</p>
                <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                  {exp.achievements.map((achieve, idx) => (
                    <li key={idx}>{achieve}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
