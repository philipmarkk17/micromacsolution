import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export default function FloatingCards() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const cards = [
    { position: [4, 0, 0], color: '#0ea5e9' },
    { position: [-2, 3, 2], color: '#06b6d4' },
    { position: [-2, -3, 2], color: '#0891b2' },
  ];

  return (
    <group ref={groupRef}>
      {cards.map((card, idx) => (
        <mesh key={idx} position={card.position as [number, number, number]}>
          <boxGeometry args={[1, 1.2, 0.2]} />
          <meshPhongMaterial color={card.color} emissive={card.color} />
        </mesh>
      ))}
    </group>
  );
}
