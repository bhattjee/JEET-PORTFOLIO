import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const FloatingParticles = () => {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(500), { radius: 2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00BFFF"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Medium', icon: '📝', url: 'https://medium.com' }
  ];

  return (
    <footer className="relative py-16 px-8 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <FloatingParticles />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Thank You for Visiting
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Thank you for taking the time to explore my digital space. I hope you've enjoyed learning about my journey in AI/ML and full-stack development.
            </p>
            <p className="text-xl font-semibold text-[#00BFFF] text-glow">
              Let's connect and build something amazing together!
            </p>
            <p>
              Always open to discussing new opportunities, collaborations, and innovative projects that push the boundaries of what's possible with technology.
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 hover:border-[#00BFFF] transition-all duration-300"
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                rotate: 10
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </span>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: -50 }}
                className="absolute bottom-full mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg border border-[#00BFFF] whitespace-nowrap"
              >
                {link.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#00BFFF]"></div>
              </motion.div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-[#00BFFF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-2">
            © {currentYear} Alex Chen. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Crafted with ❤️ using React, Three.js, and a lot of ☕
          </p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#00BFFF] text-black rounded-full flex items-center justify-center font-bold text-lg hover:bg-white transition-all duration-300 glow-blue-intense z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ delay: 1 }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
