
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
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

export default AnimatedSphere;
