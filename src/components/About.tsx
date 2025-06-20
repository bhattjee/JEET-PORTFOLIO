
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Add floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
      
      // Pulsing scale effect
      const scale = 3 + Math.sin(state.clock.elapsedTime * 1.2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        color="#00BFFF"
        transparent
        opacity={0.7}
        wireframe={false}
        shininess={100}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00BFFF" size={0.02} transparent opacity={0.6} />
    </points>
  );
};

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

  // Main profile images for the large container - Replace with your own images
  const mainProfileImages = [
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face",
      alt: "Your professional photo",
      title: "Professional Portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      alt: "Your workspace setup", 
      title: "My Workspace"
    },
    {
      url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&h=600&fit=crop",
      alt: "Team collaboration photo",
      title: "Team Collaboration"
    }
  ];

  // Small overlay images for bottom section
  const profileImages = [
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
      alt: "Professional headshot",
      caption: "Replace with your professional photo"
    },
    {
      url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=600&fit=crop&crop=face", 
      alt: "Workspace photo",
      caption: "Replace with your workspace/coding setup"
    },
    {
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
      alt: "Team collaboration",
      caption: "Replace with team/project photos"
    }
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
            Passionate about creating intelligent solutions that bridge the gap between technology and human needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Enhanced Visual Container with 3D Animation AND Your Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
          >
            {/* 3D Animation Background Layer */}
            <div className="absolute inset-0">
              <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.8} color="#00BFFF" />
                <pointLight position={[-10, -10, -10]} intensity={0.4} color="#0080FF" />
                <spotLight
                  position={[0, 10, 0]}
                  angle={0.3}
                  penumbra={1}
                  intensity={0.6}
                  color="#00BFFF"
                />
                <AnimatedSphere />
                <ParticleField />
              </Canvas>
            </div>

            {/* Main Image Gallery - ADD YOUR IMAGES HERE */}
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-center">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center mb-6"
                >
                  <h3 className="text-2xl font-bold text-[#00BFFF] mb-2">🖼️ Replace with Your Images</h3>
                  <p className="text-sm text-gray-300">Update the mainProfileImages array in the code</p>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                  {mainProfileImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.3 }}
                      viewport={{ once: true }}
                      className="relative group"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="relative overflow-hidden rounded-lg border-2 border-gray-600 group-hover:border-[#00BFFF] transition-all duration-300">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-2 left-2 right-2">
                            <h4 className="text-white font-semibold text-sm">{image.title}</h4>
                          </div>
                        </div>
                        {/* Glowing border effect */}
                        <div className="absolute inset-0 rounded-lg border border-[#00BFFF] opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Instructions for adding your images */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600 mt-6"
                >
                  <div className="text-xs text-gray-300 space-y-1">
                    <p>📝 <strong>To add your images:</strong></p>
                    <p>• Update <code className="bg-gray-800 px-1 rounded text-[#00BFFF]">mainProfileImages</code> array</p>
                    <p>• Use: <code className="bg-gray-800 px-1 rounded text-[#00BFFF]">"/your-photo.jpg"</code> for uploaded files</p>
                    <p>• Or: <code className="bg-gray-800 px-1 rounded text-[#00BFFF]">"https://your-site.com/image.jpg"</code></p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#00BFFF] via-transparent to-[#00BFFF] opacity-30 animate-pulse"></div>
            
            {/* Small overlay images at bottom */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="grid grid-cols-3 gap-2">
                {profileImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-16 object-cover rounded-lg border-2 border-gray-600 group-hover:border-[#00BFFF] transition-all duration-300 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <p className="text-xs text-white text-center px-1">{image.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
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

            {/* Additional image placeholder section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 rounded-lg p-4 border border-gray-700"
            >
              <h4 className="text-[#00BFFF] font-semibold mb-2">🖼️ Add Your Personal Images Here:</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>• Replace the example URLs in the <code className="bg-gray-800 px-1 rounded">profileImages</code> array</p>
                <p>• Upload your images and use the paths like: <code className="bg-gray-800 px-1 rounded">/your-image.jpg</code></p>
                <p>• Or use external URLs: <code className="bg-gray-800 px-1 rounded">https://your-site.com/image.jpg</code></p>
              </div>
            </motion.div>
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
                    <span className="text-[#00BFFF] font-bold text-lg">{skill.level}%</span>
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
