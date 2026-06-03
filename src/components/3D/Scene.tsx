import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import AnimatedSphere from './AnimatedSphere';
import FloatingCards from './FloatingCards';
import ParticleCloud from './ParticleCloud';

export default function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={true}
          enablePan={true}
          minDistance={5}
          maxDistance={20}
        />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color="#0ea5e9" />

        {/* 3D Objects */}
        <AnimatedSphere />
        <FloatingCards />
        <ParticleCloud />

        <Preload all />
      </Suspense>
    </Canvas>
  );
}
