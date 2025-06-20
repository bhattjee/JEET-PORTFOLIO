
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

const WorkExperience = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const experiences = [
    {
      position: "Junior Developer",
      company: "Samb Infotech GMBH",
      duration: "2.5+ Years",
      location: "Bhavnagar , Gujrat , India",
      Headquater: "Sttutgart , Germany",
      type: "Germany Based MNC",
      responsibilities: [
        "Tested structured organization website on design and functionality ",
        "Implemented AI/ML models for business solutions, improving efficiency by 40%",
        "Collaborated with cross-functional teams on enterprise projects",
        "Create chatbots to integret in organization website",
        "Developed automated systems for simplifying task",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Vue.js",
        "Angular",
        "Django",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "Talwind CSS",
        "MongoDB",
        "PostgreSQL",
        "Oracel",
        "Docker",
        "Kubernetes",
      ],
      achievements: [
        "Sucessfully created multimodular application in 24HR",
        "Led successful migration of legacy systems.",
        "Implemented CI/CD pipelines reducing deployment time.",
        "Worked with 3 technical papers on AI/ML applications",
        "All types of testing on the metting room application",
      ],
    },
  ];

  const milestones = [
    { year: "2021", event: "Started as Junior Developer", icon: "🚀" },
    { year: "2022", event: "First AI/ML Project Deployment", icon: "🤖" },
    {
      year: "2023",
      event: "Team Lead for Major Platform Redesign",
      icon: "👨‍💼",
    },
    { year: "2024", event: "Senior Developer Promotion Track", icon: "📈" },
  ];

  // Companies worked with - you can replace with your actual companies
  const companiesWorkedWith = [
    {
      name: "Samb Infotech GMBH",
      logo: "https://i.postimg.cc/ydXjq9H8/SMAC-Softwares-Gmb-H-Logo-white-retina.png",
      description: "Leading Tech Solutions",
      link: "https://smacsoftwares.com/",
    },
  ];

  // Project images for the slider
  const projectImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "AI/ML Dashboard",
      link: "https://example.com/project1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "Meeting Room App",
      link: "https://example.com/project2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      title: "Chatbot Integration",
      link: "https://example.com/project3"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      title: "Automated Systems",
      link: "https://example.com/project4"
    }
  ];

  const handleCardClick = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section
      id="work"
      className="py-20 px-8 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions at scale with cutting-edge
            technologies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#00BFFF] mb-8 text-center">
            Career Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00BFFF] to-transparent"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-[#00BFFF] transition-all duration-300">
                      <div className="text-2xl mb-2">{milestone.icon}</div>
                      <div className="text-[#00BFFF] font-bold text-lg">
                        {milestone.year}
                      </div>
                      <div className="text-gray-300">{milestone.event}</div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#00BFFF] rounded-full border-4 border-black glow-blue"></div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies Worked With Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          <h3 className="text-3xl font-bold text-[#00BFFF] mb-8 text-center text-glow">
            Work with
          </h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Worked with industry leaders to deliver cutting-edge solutions
          </p>
          
          {/* Companies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {companiesWorkedWith.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d cursor-pointer"
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 191, 255, 0.2)",
                }}
                onClick={handleCardClick}
              >
                {/* Company Logo */}
                <div className="flex items-center justify-center mb-3">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Company Name */}
                <h4 className="text-white text-sm font-semibold text-center mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
                  {company.name}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-xs text-center group-hover:text-gray-300 transition-colors duration-300">
                  {company.description}
                </p>

                {/* Arrow indicator */}
                <motion.div 
                  className="absolute top-2 right-2"
                  animate={{ rotate: isSliderOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-4 h-4 text-[#00BFFF] opacity-70" />
                </motion.div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00BFFF]/0 via-[#00BFFF]/5 to-[#00BFFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Horizontal Slider */}
          <AnimatePresence>
            {isSliderOpen && (
              <motion.div
                initial={{ opacity: 0, x: -100, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, x: -100, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mt-8 overflow-hidden bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-[#00BFFF]">Project Gallery</h4>
                    <button 
                      onClick={handleCardClick}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projectImages.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                        onClick={() => handleImageClick(project.link)}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center">
                            <ExternalLink className="w-6 h-6 text-white mb-2 mx-auto" />
                            <p className="text-white text-sm font-medium">{project.title}</p>
                          </div>
                        </div>

                        {/* Title at bottom */}
                        <div className="p-3">
                          <h5 className="text-white text-sm font-medium truncate">{project.title}</h5>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#00BFFF]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </motion.div>

        {/* Detailed Experience */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-500 glow-blue card-3d"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.position}
                  </h3>
                  <div className="text-[#00BFFF] text-xl font-semibold mb-1">
                    {exp.company}
                  </div>
                  <div className="text-gray-400 text-sm mb-1">{exp.type}</div>
                  <div className="text-gray-400 text-sm mb-1">
                    📍 {exp.location}
                  </div>
                  <div className="text-gray-400 text-sm">⏱️ {exp.duration}</div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#00BFFF] mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="text-[#00BFFF] mr-2">🏆</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#00BFFF] mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: respIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-300 flex items-start"
                      >
                        <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-[#00BFFF] mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-[#00BFFF] hover:text-black transition-all duration-300 cursor-default"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
