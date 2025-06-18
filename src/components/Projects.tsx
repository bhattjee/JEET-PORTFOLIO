
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-Commerce Recommendation System',
      description: 'Machine learning-driven product recommendation engine with real-time analytics and personalized user experiences.',
      techStack: ['Python', 'TensorFlow', 'React', 'MongoDB', 'FastAPI'],
      features: ['ML-based product recommendations', 'Real-time analytics dashboard', 'User behavior tracking', 'A/B testing framework'],
      impact: '35% increase in user engagement',
      color: '#00BFFF',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      title: 'Full Stack Social Media Analytics Dashboard',
      description: 'Comprehensive analytics platform for social media management with real-time data visualization and sentiment analysis.',
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'Redis'],
      features: ['Real-time data visualization', 'User sentiment analysis', 'Multi-platform integration', 'Custom reporting'],
      impact: 'Streamlined management for 50+ clients',
      color: '#FF6B6B',
      gradient: 'from-red-500 to-pink-400'
    },
    {
      id: 3,
      title: 'Computer Vision Quality Control System',
      description: 'Automated defect detection system using computer vision for manufacturing quality assurance with real-time processing.',
      techStack: ['Python', 'OpenCV', 'FastAPI', 'React', 'Docker'],
      features: ['Automated defect detection', 'Real-time processing', 'Quality metrics tracking', 'Integration with production lines'],
      impact: '90% accuracy in quality assessment',
      color: '#4ECDC4',
      gradient: 'from-teal-500 to-green-400'
    },
    {
      id: 4,
      title: 'AI Chatbot with NLP Integration',
      description: 'Context-aware conversational AI with natural language processing capabilities and multi-language support.',
      techStack: ['Python', 'LangChain', 'OpenAI API', 'Vue.js', 'MongoDB'],
      features: ['Context-aware conversations', 'Multi-language support', 'Intent recognition', 'Knowledge base integration'],
      impact: 'Reduced customer service workload by 60%',
      color: '#FFE66D',
      gradient: 'from-yellow-500 to-orange-400'
    },
    {
      id: 5,
      title: 'Real-Time Collaborative Code Editor',
      description: 'Live collaboration platform for developers with real-time editing, syntax highlighting, and version control.',
      techStack: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'CodeMirror'],
      features: ['Live collaboration', 'Syntax highlighting', 'Version control', 'Multiple language support'],
      impact: 'Enhanced team productivity for remote development',
      color: '#9B59B6',
      gradient: 'from-purple-500 to-indigo-400'
    },
    {
      id: 6,
      title: 'ML Model Deployment Platform',
      description: 'One-click machine learning model deployment platform with auto-scaling and monitoring capabilities.',
      techStack: ['Docker', 'Kubernetes', 'FastAPI', 'React', 'Prometheus'],
      features: ['One-click ML model deployment', 'Auto-scaling infrastructure', 'Performance monitoring', 'CI/CD pipelines'],
      impact: 'Reduced deployment time from hours to minutes',
      color: '#E74C3C',
      gradient: 'from-red-500 to-yellow-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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
            A showcase of innovative AI/ML solutions and full-stack applications that drive real business impact
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
                scale: 1.02
              }}
            >
              <div className="relative z-10">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{project.id}</span>
                    </div>
                    <motion.div
                      className="flex space-x-2"
                      animate={{ rotate: hoveredProject === project.id ? 360 : 0 }}
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
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full`}>
                    <span className="text-black font-semibold text-sm">
                      📈 {project.impact}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    className="flex-1 py-3 bg-[#00BFFF] text-black font-semibold rounded-lg hover:bg-white transition-all duration-300 glow-blue"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    className="flex-1 py-3 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-lg hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.button>
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  opacity: hoveredProject === project.id ? 0.1 : 0
                }}
              />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-${project.color} opacity-20 rounded-tr-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
