
import { motion } from 'framer-motion';
import ProfileImage from './about/ProfileImage';
import SkillsVisualization from './about/SkillsVisualization';
import InterestsGrid from './about/InterestsGrid';

const About = () => {
  const skills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Leadership', level: 88 },
    { name: 'Innovation', level: 92 },
    { name: 'Communication', level: 90 },
    { name: 'Adaptability', level: 94 }
  ];

  const interests = [
    { icon: '🧠', name: 'AI Research', description: 'Exploring cutting-edge ML algorithms' },
    { icon: '🚀', name: 'Space Tech', description: 'Following aerospace innovations' },
    { icon: '📚', name: 'Tech Writing', description: 'Sharing knowledge through articles' },
    { icon: '🌱', name: 'Mentoring', description: 'Guiding next-gen developers' },
    { icon: '🎮', name: 'Game Dev', description: 'Creating interactive experiences' },
    { icon: '🎨', name: 'UI/UX Design', description: 'Crafting beautiful interfaces' }
  ];

  const mainProfileImage = {
    url: "/lovable-uploads/8092c197-b951-410c-b576-ad2590b558c1.png",
    alt: "Your professional photo",
    title: "Professional Portrait"
  };

  return (
    <section id="about" className="py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that bridge the gap between technology and human needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-16">
          <ProfileImage imageData={mainProfileImage} />

          {/* Content - Matches the full height */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center h-screen max-h-[900px] min-h-[700px] pl-12"
          >
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a passionate AI/ML Engineer and Full Stack Developer with over 2.5 years of experience at a leading MNC. My journey in technology began with a fascination for artificial intelligence and has evolved into a comprehensive skill set spanning modern web development and machine learning.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I specialize in creating intelligent, scalable applications that bridge the gap between cutting-edge AI research and practical business solutions. My expertise lies in developing end-to-end solutions that leverage the latest in AI/ML technologies, from natural language processing to computer vision, combined with robust full-stack development practices.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                When I'm not coding, I contribute to open-source projects and mentor aspiring developers in the AI/ML community. I'm constantly exploring emerging technologies and frameworks, ensuring that every project incorporates the most effective and innovative approaches.
              </motion.p>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#00BFFF] pl-6 py-4 bg-gray-900/50 rounded-r-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/10 to-transparent"></div>
              <p className="text-[#00BFFF] text-lg italic relative z-10">
                "Innovation distinguishes between a leader and a follower. I choose to lead through technology."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>

        <SkillsVisualization skills={skills} />
        <InterestsGrid interests={interests} />
      </div>
    </section>
  );
};

export default About;
