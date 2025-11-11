import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";

const WorkExperience = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const experiences = [
    {
      position: "Trainee AI Developer",
      company: "Samb Info LLP",
      duration: "2+ Years",
      location: "Bhavnagar , Gujarat , India",
      Headquater: "Sttutgart , Germany",
      type: "Germany Based MNC",
      responsibilities: [
        "Tested structured organization website on design and functionality ",
        "Implemented AI/ML models for business solutions, improving efficiency by 40%",
        "Collaborated with cross-functional teams on enterprise projects",
        "Build intuitive dashboards for improved user engagement.",
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
      ],
      achievements: [
        "Sucessfully created multimodular application in 24HR",
        "Led successful migration of legacy systems.",
        "Implemented testing modules reducing debugging time.",
        "Worked with core technical teams on multicultural environment",
        "All types of testing on the metting room application",
      ],
    },
  ];

  const milestones = [
    { year: "2022", event: "Started career as a Intern" },
    { year: "2022", event: "Completed initial programming concepts" },
    {
      year: "2023",
      event: "Led AI-based pizza delivery system as first major project",
    },
    {
      year: "2023",
      event:
        "Worked with Python computer vision libraries on live applications",
    },
    { year: "2024", event: "Developed autonomous systems using Raspberry Pi" },
    {
      year: "2024",
      event:
        "Strengthened full-stack development skills across multiple frameworks",
    },
    {
      year: "2025",
      event:
        "Completed bachelor’s thesis on AI-powered workout and routine generator",
    },
    {
      year: "2025",
      event: "Earned a Bachelor's degree in Computer Applications (BCA)",
    },
    {
      year: "2025",
      event:
        "Initiated Master’s studies in AI/ML with a focus on hardware integration",
    },
  ];

  // Companies worked with - you can replace with your actual companies
  const companiesWorkedWith = [
    {
      name: "Samb Info LLP",
      logo: "https://i.postimg.cc/mkFPBDmn/SAMB-Info-logo.png",
      description: "Leading Tech Solutions",
      link: "https://sambinfo.in/",
    },
  ];

  // Project images for the slider
  const projectImages = [
    {
      id: 1,
      image: "https://i.postimg.cc/90y7Jc19/scrren1.png",
      title: "Screen XO",
      link: "https://screenxo.com/",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Y0XHcWXB/screen2.png",
      title: "Meeting Room App",
      link: "https://smacmeetingroom.com/",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/154BcFZh/scre4.png",
      title: "Outsystems",
      link: "https://www.outsystems.com/",
    },
  ];

  const handleCardClick = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const handleImageClick = (link: string) => {
    window.open(link, "_blank");
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

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#00BFFF] mb-8 text-center">
            Career Timeline
          </h3>
          <div className="relative">
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
                <div className="flex items-center justify-center mb-3">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                <h4 className="text-white text-sm font-semibold text-center mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
                  {company.name}
                </h4>

                <p className="text-gray-400 text-xs text-center group-hover:text-gray-300 transition-colors duration-300">
                  {company.description}
                </p>

                <motion.div
                  className="absolute top-2 right-2"
                  animate={{ rotate: isSliderOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-4 h-4 text-[#00BFFF] opacity-70" />
                </motion.div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00BFFF]/0 via-[#00BFFF]/5 to-[#00BFFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

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
                    <h4 className="text-xl font-bold text-[#00BFFF]">
                      Project Gallery
                    </h4>
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

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center">
                            <ExternalLink className="w-6 h-6 text-white mb-2 mx-auto" />
                            <p className="text-white text-sm font-medium">
                              {project.title}
                            </p>
                          </div>
                        </div>

                        <div className="p-3">
                          <h5 className="text-white text-sm font-medium truncate">
                            {project.title}
                          </h5>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#00BFFF]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </motion.div>

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
                  </div>
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
