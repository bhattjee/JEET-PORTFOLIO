import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import {
  Brain,
  Rocket,
  BookOpen,
  Users,
  Gamepad2,
  Palette,
} from "lucide-react";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 100, 200]} />
      <meshPhongMaterial color="#00BFFF" transparent opacity={0.8} />
    </mesh>
  );
};

const About = () => {
  const skills = [
    { name: "Problem Solving", level: 88 },
    { name: "Team Leadership", level: 95 },
    { name: "Innovation", level: 90 },
    { name: "Communication", level: 90 },
    { name: "Adaptability", level: 94 },
  ];

  const interests = [
    {
      icon: <Brain className="text-blue-500" />,
      name: "AI Research",
      description: "Exploring cutting-edge ML algorithms",
    },
    {
      icon: <Rocket className="text-blue-500" />,
      name: "Home Tech",
      description: "Following Homescience innovations",
    },
    {
      icon: <BookOpen className="text-blue-500" />,
      name: "Tech Writing",
      description: "Sharing knowledge through articles and posts",
    },
    {
      icon: <Users className="text-blue-500" />,
      name: "Reading",
      description: "Read fiction and nonfiction , Sometimes Tech !",
    },
    {
      icon: <Gamepad2 className="text-blue-500" />,
      name: "Hiking and Yoga",
      description: "Offline mode: hiking trails & yoga flows",
    },
    {
      icon: <Palette className="text-blue-500" />,
      name: "UI/UX Design",
      description: "Crafting beautiful interfaces",
    },
  ];

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
            Passionate about creating intelligent solutions that bridge the gap
            between technology and human needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Full Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative min-h-full rounded-2xl overflow-hidden shadow-2xl flex"
          >
            {/* Background 3D Sphere (Optional - can be removed if you want only image) */}
            <div className="absolute inset-0 opacity-20">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AnimatedSphere />
              </Canvas>
            </div>

            {/* Full Coverage Image */}
            <div className="absolute inset-0 z-10">
              <a
                href="https://i.postimg.cc/0NMXJfqc/Profile.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/0NMXJfqc/Profile.jpg"
                  alt="JEET BHATT"
                  className="w-full h-full object-cover"
                />
              </a>
              {/* Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Optional: Animated border/glow effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#00BFFF]/50 animate-pulse"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with over 2 years of experience at a leading MNC, 
                specializing in AI/ML integration. My journey in
                technology began with a fascination for artificial intelligence
                and has evolved into a comprehensive skill set spanning modern
                web development and machine learning.
              </p>
              <p>
                What excites me is turning AI potential into reality by building scalable applications for tangible, 
                real-world impact. I'm currently exploring how natural language processing,
                computer vision, and machine learning can be combined with
                full-stack development to create practical, impactful solutions.
                My goal is to bridge the gap between advanced AI concepts and
                everyday applications as I grow my skills.
              </p>
              <p>
                When I'm not deep in code, you'll probably find me in the
                mountains or chilling at a campsite with a 300-page biography in
                one hand and an oversized bottle of coffee in the other. I'm
                always exploring new tech and frameworks — because staying
                curious (and caffeinated) is my secret sauce for keeping every
                project fresh, innovative, and a little bit smarter than the
                last.
              </p>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#00BFFF] pl-6 py-4 bg-gray-900/50 rounded-r-lg"
            >
              <p className="text-[#00BFFF] text-lg italic">
                "I believe innovation drives humanity forward, solving problems
                for a better tomorrow."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Skills Visualization */}
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
                    <span className="text-[#00BFFF] font-bold text-lg">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <h4 className="text-white font-semibold">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
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
      </div>
    </section>
  );
};

export default About;
