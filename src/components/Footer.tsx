import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingParticles = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate sphere data with proper validation - memoized to prevent regeneration
  const sphere = useMemo(() => {
    try {
      const count = 300; // Reduced from 500 for better performance
      const radius = 2;
      const positions = new Float32Array(count * 3);
      
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = radius * Math.cbrt(Math.random());
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        // Validate each value
        positions[i * 3] = isNaN(x) || !isFinite(x) ? 0 : x;
        positions[i * 3 + 1] = isNaN(y) || !isFinite(y) ? 0 : y;
        positions[i * 3 + 2] = isNaN(z) || !isFinite(z) ? 0 : z;
      }
      
      return positions;
    } catch (error) {
      // Fallback: return empty array if generation fails
      console.warn('Failed to generate sphere data:', error);
      return new Float32Array(300 * 3);
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current && !isNaN(delta) && isFinite(delta) && delta > 0 && delta < 1) {
      // Throttle rotation updates for better performance
      ref.current.rotation.x -= Math.min(delta / 20, 0.1);
      ref.current.rotation.y -= Math.min(delta / 30, 0.1);
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

  return (
    <footer className="relative py-16 px-8 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas 
          camera={{ position: [0, 0, 1] }}
          gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
        >
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
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Thank You for Visiting
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Thank you for taking the time to explore my digital space. I hope
              you've enjoyed learning about my journey in AI/ML and full-stack
              development.
            </p>
            <p className="text-xl font-semibold text-[#00BFFF] text-glow">
              Let's connect and build something amazing together!
            </p>
            <p>
              Always open to discussing new opportunities, collaborations, and
              innovative projects that push the boundaries of what's possible
              with technology.
            </p>
          </div>
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
            © {currentYear} JEET BHATT. Personal Portfolio.
          </p>
          <p className="text-gray-600 text-xs">
            Crafted with React, Three.js, and a lot of ☕
          </p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
