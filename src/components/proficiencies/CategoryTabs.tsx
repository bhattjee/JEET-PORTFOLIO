
import { motion } from 'framer-motion';

interface Category {
  title: string;
  color: string;
  skills: Array<{
    name: string;
    description: string;
    level: number;
  }>;
}

interface CategoryTabsProps {
  categories: Record<string, Category>;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {Object.entries(categories).map(([key, category]) => (
        <motion.button
          key={key}
          onClick={() => onCategoryChange(key)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === key
              ? 'bg-[#00BFFF] text-black glow-blue-intense'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.title}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryTabs;
