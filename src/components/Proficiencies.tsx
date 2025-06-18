import { motion } from 'framer-motion';
import { useState } from 'react';

const Proficiencies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      title: 'Frontend Technologies',
      color: '#00BFFF',
      skills: [
        { name: 'React.js', description: 'Modern component-based library', level: 95 },
        { name: 'Next.js', description: 'Full-stack React framework', level: 90 },
        { name: 'Vue.js', description: 'Progressive JavaScript framework', level: 85 },
        { name: 'Angular', description: 'Enterprise-level framework', level: 78 },
        { name: 'Svelte', description: 'Compile-time optimized framework', level: 80 },
        { name: 'TypeScript', description: 'Type-safe JavaScript', level: 92 },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework', level: 95 },
        { name: 'Three.js', description: '3D graphics library', level: 88 }
      ]
    },
    backend: {
      title: 'Backend Technologies',
      color: '#FF6B6B',
      skills: [
        { name: 'Node.js', description: 'JavaScript runtime environment', level: 90 },
        { name: 'Python', description: 'Versatile programming language', level: 95 },
        { name: 'Django', description: 'High-level Python framework', level: 85 },
        { name: 'FastAPI', description: 'Modern API framework', level: 88 },
        { name: 'Express.js', description: 'Minimal Node.js framework', level: 90 },
        { name: 'Flask', description: 'Lightweight Python framework', level: 82 },
        { name: 'GraphQL', description: 'Query language for APIs', level: 78 },
        { name: 'REST APIs', description: 'Architectural style for web services', level: 92 }
      ]
    },
    aiml: {
      title: 'AI/ML Integration',
      color: '#4ECDC4',
      skills: [
        { name: 'TensorFlow', description: 'End-to-end ML platform', level: 90 },
        { name: 'PyTorch', description: 'Dynamic neural network framework', level: 88 },
        { name: 'Scikit-learn', description: 'Machine learning library', level: 85 },
        { name: 'OpenAI GPT', description: 'Language model integration', level: 92 },
        { name: 'Hugging Face', description: 'Transformer models', level: 87 },
        { name: 'LangChain', description: 'LLM application framework', level: 83 },
        { name: 'Computer Vision', description: 'OpenCV, YOLO', level: 80 },
        { name: 'NLP', description: 'NLTK, spaCy', level: 85 }
      ]
    },
    databases: {
      title: 'Databases',
      color: '#FFE66D',
      skills: [
        { name: 'MongoDB', description: 'NoSQL document database', level: 88 },
        { name: 'PostgreSQL', description: 'Advanced relational database', level: 90 },
        { name: 'MySQL', description: 'Popular relational database', level: 85 },
        { name: 'Redis', description: 'In-memory data store', level: 82 },
        { name: 'Firebase', description: 'Google\'s mobile platform', level: 87 },
        { name: 'Supabase', description: 'Open-source Firebase alternative', level: 83 },
        { name: 'Pinecone', description: 'Vector database for AI', level: 78 },
        { name: 'Neo4j', description: 'Graph database', level: 75 }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="proficiencies" className="py-20 px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            Technical Proficiencies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern web development and cutting-edge AI/ML technologies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
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

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories[activeCategory as keyof typeof categories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Proficiencies;
