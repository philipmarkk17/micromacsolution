import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 4]} />
      <meshPhongMaterial
        color="#0ea5e9"
        emissive="#0284c7"
        shininess={100}
        wireframe={false}
      />

      {/* Outer glow sphere */}
      <mesh position={[0, 0, 0]} scale={1.15}>
        <icosahedronGeometry args={[2, 4]} />
        <meshPhongMaterial
          color="#06b6d4"
          emissive="#0891b2"
          shininess={50}
          wireframe={true}
          opacity={0.3}
          transparent={true}
        />
      </mesh>
    </mesh>
  );
}
