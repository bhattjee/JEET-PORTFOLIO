
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  description: string;
  level: number;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d backdrop-blur-sm"
      whileHover={{ 
        y: -10, 
        rotateX: 5, 
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(0, 191, 255, 0.2)"
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
            {skill.name}
          </h3>
          <span className="text-sm text-gray-400 group-hover:text-[#00BFFF] transition-colors duration-300">
            {skill.level}%
          </span>
        </div>
        
        <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
          {skill.description}
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00BFFF] to-white rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00BFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default SkillCard;
