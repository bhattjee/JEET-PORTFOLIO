
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import AnimatedSphere from './AnimatedSphere';
import ParticleField from './ParticleField';

interface ProfileImageProps {
  imageData: {
    url: string;
    alt: string;
    title: string;
  };
}

const ProfileImage = ({ imageData }: ProfileImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-screen max-h-[900px] min-h-[700px] overflow-hidden"
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

      {/* Full Cover Image - Covers absolute full container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-10 group"
        whileHover={{ scale: 1.01 }}
      >
        <img
          src={imageData.url}
          alt={imageData.alt}
          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 border-2 border-[#00BFFF]/30 group-hover:border-[#00BFFF]/60 transition-all duration-300"></div>
        
        {/* Optional overlay content */}
        <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="text-xl font-semibold mb-2">{imageData.title}</h4>
          <p className="text-gray-300 text-sm">AI/ML Engineer & Full Stack Developer</p>
        </div>
      </motion.div>

      {/* Animated border effect */}
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#00BFFF] via-transparent to-[#00BFFF] opacity-20 animate-pulse"></div>
    </motion.div>
  );
};

export default ProfileImage;
