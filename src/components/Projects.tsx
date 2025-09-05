import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "GRITHUB – AI-Based Workout and Diet Plan Generator",
      description:
        "An intelligent system designed to generate personalized workout routines and diet plans using AI-based recommendations tailored to individual user profiles.",
      techStack: [
        "Machine Learning",
        "Python",
        "Nutrition Algorithms",
        "Fitness Analytics",
        "Personalization Models",
      ],
      features: [
        "Customized fitness and meal plans based on physiological data",
        "Integration of AI models for user-specific recommendations",
        "Interactive goal setting and progress tracking interface",
        "Automated adjustments based on user input and feedback",
      ],
      impact:
        "Achieved a 97/100 score as a bachelor thesis for its innovation, accuracy, and real-world applicability",
      color: "#00BFFF",
      gradient: "from-blue-500 to-cyan-400",
      demoUrl: "https://grithub.vercel.app",
    },
    {
      id: 2,
      title: "AI-Powered Pizza Suggestion and Generator",
      description:
        "An intelligent food-tech solution that recommends pizza combinations and generates custom recipes based on user preferences, dietary needs, and local ingredients.",
      techStack: [
        "Python",
        "Scikit-learn",
        "HTML and CSS",
        "Flask",
        "MongoDB",
        "Tensorflow",
        "DeepL API",
      ],
      features: [
        "AI-driven flavor and ingredient pairing",
        "Personalized pizza suggestions based on user input",
        "Dynamic recipe generation with nutritional insights",
        "Interactive frontend for live customization",
      ],
      impact:
        "Improved user satisfaction through personalized culinary recommendations and increased engagement for food-tech platforms",
      color: "#00BFFF",
      gradient: "from-blue-500 to-cyan-400",
      demoUrl: "https://pizzacrust.onrender.com/",
    },
    {
      id: 3,
      title: "Real-Time Vehicle Detection and Speed Monitoring System",
      description:
        "Camera-based system built on Raspberry Pi for detecting the number of vehicles and estimating their speed in real time using computer vision techniques.",
      techStack: ["Python", "OpenCV", "Raspberry Pi", "YOLOv5", "NumPy"],
      features: [
        "Real-time car detection with bounding box tracking",
        "Speed estimation using frame-difference and calibration",
        "Lightweight deployment on Raspberry Pi for edge computing",
        "Live video feed processing and analytics",
      ],
      impact:
        "Enabled low-cost, on-site traffic monitoring with efficient vehicle tracking",
      color: "#00BFFF",
      gradient: "from-blue-500 to-cyan-400",
      demoUrl: "https://github.com/bhattjee/VEHICLE-DETECTION",
    },
    {
      id: 4,
      title: "AI-Powered Intelligent Chat Interface with NLP Capabilities",
      description:
        "A context-aware conversational AI system that understands and responds based on prior interactions. Equipped with advanced natural language processing for intelligent dialogue across multiple topics",
      techStack: [
        "Python",
        "LangChain",
        "OpenAI API",
        "Vue.js",
        "MongoDB",
        "Mistral API",
      ],
      features: [
        "Context-aware conversations",
        "Vast token support",
        "Intent recognition",
        "Knowledge base integration",
      ],
      impact: "Reduced customer service workload by 60%",
      color: "#00BFFF",
      gradient: "from-blue-500 to-cyan-400",
      demoUrl: "https://ai-chat-interface-jeet-vercels-projects.vercel.app",
    },
    {
  id: 5,
  title: "Smart Web Scraping Platform with Real-Time Data Extraction",
  description:
    "A responsive and AI-assisted web scraping platform that allows users to extract structured data from websites with ease. Built with modern technologies and secured APIs, the platform is user-friendly and optimized for performance.",
  techStack: [
    "React.js",
    "Flask",
    "Python",
    "BeautifulSoup",
    "Render",
    "Vercel",
    "Tailwind CSS"
  ],
  features: [
    "Live web scraping interface",
    "URL validation and result preview",
    "Rate limiting & protection",
    "Clean JSON response for extracted data",
    "Minimalist and responsive UI"
  ],
  impact: "Enabled non-technical users to extract data from over 500+ sites with zero coding knowledge",
  color: "#00BFFF",
  gradient: "from-blue-500 to-cyan-400",
  demoUrl: "https://scrapeeeer.vercel.app",
},
    {
id: 6,
title: "Arthved — Stotra Gallery for Sanatan Dharma",
description:
"An ad-free online gallery featuring prominent stotras from Sanatan Dharma, including dedicated sections for Bhagwan Shiv and Hanuman Ji. Each stotra comes with Hindi and English translations, and the platform is completely free with an option to support via Buy Me a Coffee.",
techStack: [
"React.js",
"Next.js",
"Tailwind CSS",
"Node.js",
"Spotify API",
"Vercel",
"Git"
],
features: [
"Clean, ad-free stotra browsing experience",
"Hindi and English translations for each mantra",
"Direct Spotify redirection for audio/listening",
"Free access with optional support mechanism",
"Fully responsive and minimalist UI"
],
impact: "Provided an ad-free and clean stotra experience with integrated Spotify redirection, enabling seamless access to authentic content for over 1K+ monthly users",
color: "#00BFFF",
gradient: "from-blue-500 to-cyan-400",
demoUrl: "https://arthved.vercel.app",
},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative AI/ML solutions and full-stack applications
            that drive real business impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-500 card-3d"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{
                y: -15,
                rotateX: 8,
                rotateY: 5,
                scale: 1.02,
              }}
            >
              <div className="relative z-10">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">
                        {project.id}
                      </span>
                    </div>
                    <motion.div
                      className="flex space-x-2"
                      animate={{
                        rotate: hoveredProject === project.id ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#00BFFF] mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#00BFFF] mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="text-gray-300 text-sm flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <div
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                  >
                    <span className="text-black font-semibold text-sm">
                      📈 {project.impact}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    className="flex-1 py-3 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-lg hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    Live Demo
                  </motion.button>
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  opacity: hoveredProject === project.id ? 0.1 : 0,
                }}
              />

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div
                  className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-${project.color} opacity-20 rounded-tr-2xl`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
