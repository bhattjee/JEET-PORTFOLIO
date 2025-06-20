
import { motion } from 'framer-motion';

interface Interest {
  icon: string;
  name: string;
  description: string;
}

interface InterestsGridProps {
  interests: Interest[];
}

const InterestsGrid = ({ interests }: InterestsGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center mb-12 text-[#00BFFF] text-glow">
        Interests & Passions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d group"
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {interest.icon}
            </div>
            <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
              {interest.name}
            </h4>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              {interest.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InterestsGrid;
