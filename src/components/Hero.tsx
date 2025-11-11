import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Extend Window interface for Vanta
declare global {
  interface Window {
    VANTA: {
      FOG: (options: any) => any;
    };
  }
}

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let checkVanta: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const initVanta = () => {
      if (vantaRef.current && window.VANTA) {
        vantaEffect.current = window.VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x0,
          midtoneColor: 0x0,
          lowlightColor: 0x0,
          baseColor: 0x69ff
        });
      }
    };

    // Check if VANTA is already loaded
    if (window.VANTA) {
      initVanta();
    } else {
      // Wait for VANTA to load
      checkVanta = setInterval(() => {
        if (window.VANTA) {
          initVanta();
          if (checkVanta) clearInterval(checkVanta);
        }
      }, 100);

      // Cleanup interval after 10 seconds if VANTA doesn't load
      timeoutId = setTimeout(() => {
        if (checkVanta) clearInterval(checkVanta);
      }, 10000);
    }

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
      if (checkVanta) clearInterval(checkVanta);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Vanta.js Fog Background */}
      <div ref={vantaRef} className="absolute inset-0 w-full h-full" id="vanta-fog"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-glow"
          style={{
            background: 'linear-gradient(45deg, #ffffff, #00BFFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(0, 191, 255, 0.3)'
          }}
        >
          JEET BHATT
        </motion.h1>

        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-light text-[#00BFFF] text-glow">
            AI/ML Applications & Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent solutions with cutting-edge technology
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400">
            <span className="text-sm">2.5+ years at Fortune 500 MNC</span>
            <span className="hidden md:block">•</span>
            <span className="text-sm">AI-Powered Applications Specialist</span>
            <span className="hidden md:block">•</span>
            <span className="text-sm">Innovation-Driven Developer</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#00BFFF] text-black font-semibold rounded-full glow-blue-intense hover:bg-white transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-[#00BFFF] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-[#00BFFF] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
