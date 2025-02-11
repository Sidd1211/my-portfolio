import React from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BGImage from "../assets/images/me_bw.jpg";
import BGImageR from "../assets/images/me_red.jpg";
import AMImage from "../assets/images/IMG_20200131_063804.jpg";
function HomePage() {
    return (
        <div className="bg-gray-900 text-white">
            {/* Welcome Section with Parallax */}
            <Parallax
                bgImage={BGImage}
                bgImageAlt="technology background"
                strength={300}
                bgImageStyle={{
                    height: "100%", // Maintain full image height
                    width: "100%",  // Maintain full image width
                    objectFit: "cover",
                }}
                className="h-screen"
            >
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <motion.h1
                        className="text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome to <span className="text-yellow-300">My Portfolio</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-100 mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        A creative Full-Stack Developer building awesome web experiences.
                    </motion.p>
                    <div className="space-x-4">
                        <motion.button
                            className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/projects">View My Work</Link>
                        </motion.button>
                        <motion.button
                            className="bg-gray-900 border border-yellow-300 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 hover:text-gray-900"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact">Contact Me</Link>
                        </motion.button>
                    </div>
                </div>
            </Parallax>

            {/* About Me Section */}
            <section className="h-screen bg-gray-800 flex items-center justify-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center">
                    {/* Profile Image */}
                    <motion.div
                        className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={AMImage} // Replace with your actual image URL
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* About Me Text */}
                    <div className="max-w-lg text-center md:text-left">
                        <motion.h2
                            className="text-4xl font-bold text-yellow-300 mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Hi! I’m a passionate full-stack developer with expertise in building
                            efficient, scalable, and user-friendly web applications. I specialize
                            in React, Node.js, and creating intuitive user experiences that leave a
                            lasting impact. When I’m not coding, you’ll find me exploring new
                            technologies and brainstorming creative ideas.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Experience Section with Parallax */}
            <Parallax
                bgImage={BGImageR}
                bgImageAlt="technology background"
                strength={300}
                bgImageStyle={{
                    height: "100%", // Maintain full image height
                    width: "100%",  // Maintain full image width
                    objectFit: "cover",
                }}
                className="h-screen"
            >
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <motion.h2
                        className="text-4xl font-bold text-yellow-300 mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        My Experience
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Full-Stack Developer",
                                company: "Tech Solutions",
                                duration: "2020 - Present",
                                description:
                                    "Developed scalable web applications using React, Node.js, and MongoDB, leading to a 30% improvement in system performance.",
                            },
                            {
                                title: "Software Engineer Intern",
                                company: "Innovate Labs",
                                duration: "2019 - 2020",
                                description:
                                    "Worked on RESTful API design and optimized database queries, reducing response times by 40%.",
                            },
                            {
                                title: "Junior Developer",
                                company: "StartUp Hub",
                                duration: "2018 - 2019",
                                description:
                                    "Collaborated on UI/UX enhancements, increasing user engagement by 25% through better design and performance.",
                            },
                        ].map((experience, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                                    {experience.title}
                                </h3>
                                <p className="text-gray-300">{experience.company}</p>
                                <p className="text-gray-500">{experience.duration}</p>
                                <p className="text-gray-400 mt-2">{experience.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default HomePage;
