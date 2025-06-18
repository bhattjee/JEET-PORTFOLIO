
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      position: 'Junior Developer',
      company: 'TechCorp Solutions',
      duration: '2.5+ Years',
      location: 'San Francisco, CA',
      type: 'Fortune 500 MNC',
      responsibilities: [
        'Developed and maintained full-stack web applications serving 100K+ users',
        'Implemented AI/ML models for business solutions, improving efficiency by 40%',
        'Collaborated with cross-functional teams on enterprise projects worth $2M+',
        'Optimized application performance resulting in 60% faster load times',
        'Mentored 5+ junior team members on modern development practices'
      ],
      technologies: [
        'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 
        'Django', 'TensorFlow', 'PyTorch', 'OpenAI API', 
        'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'
      ],
      achievements: [
        'Employee of the Quarter (Q2 2023)',
        'Led successful migration of legacy systems',
        'Implemented CI/CD pipelines reducing deployment time by 80%',
        'Published 3 technical papers on AI/ML applications'
      ]
    }
  ];

  const milestones = [
    { year: '2021', event: 'Started as Junior Developer', icon: '🚀' },
    { year: '2022', event: 'First AI/ML Project Deployment', icon: '🤖' },
    { year: '2023', event: 'Team Lead for Major Platform Redesign', icon: '👨‍💼' },
    { year: '2024', event: 'Senior Developer Promotion Track', icon: '📈' }
  ];

  return (
    <section id="work" className="py-20 px-8 bg-gradient-to-b from-gray-900 to-black">
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
            Building innovative solutions at scale with cutting-edge technologies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#00BFFF] mb-8 text-center">Career Timeline</h3>
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
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-[#00BFFF] transition-all duration-300">
                      <div className="text-2xl mb-2">{milestone.icon}</div>
                      <div className="text-[#00BFFF] font-bold text-lg">{milestone.year}</div>
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
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                  <div className="text-[#00BFFF] text-xl font-semibold mb-1">{exp.company}</div>
                  <div className="text-gray-400 text-sm mb-1">{exp.type}</div>
                  <div className="text-gray-400 text-sm mb-1">📍 {exp.location}</div>
                  <div className="text-gray-400 text-sm">⏱️ {exp.duration}</div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#00BFFF] mb-3">Key Achievements</h4>
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
                  <h4 className="text-lg font-semibold text-[#00BFFF] mb-4">Key Responsibilities</h4>
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
                  <h4 className="text-lg font-semibold text-[#00BFFF] mb-4">Technologies Used</h4>
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
