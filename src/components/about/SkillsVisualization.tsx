
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillsVisualizationProps {
  skills: Skill[];
}

const SkillsVisualization = ({ skills }: SkillsVisualizationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-3xl font-bold text-center mb-12 text-[#00BFFF] text-glow">
        Core Competencies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d"
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <div className="relative mb-4">
              <svg className="w-20 h-20 mx-auto" viewBox="0 0 36 36">
                <path
                  className="text-gray-700"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="text-[#00BFFF]"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${skill.level}, 100`}
                  strokeLinecap="round"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  initial={{ strokeDasharray: "0, 100" }}
                  whileInView={{ strokeDasharray: `${skill.level}, 100` }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#00BFFF] font-bold text-lg">{skill.level}%</span>
              </div>
            </div>
            <h4 className="text-white font-semibold">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsVisualization;
