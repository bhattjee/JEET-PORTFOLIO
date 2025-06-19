
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

interface Skill {
  name: string;
  description: string;
  level: number;
}

interface SkillsGridProps {
  skills: Skill[];
  activeCategory: string;
}

const SkillsGrid = ({ skills, activeCategory }: SkillsGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      key={activeCategory}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
