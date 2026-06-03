import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function Interactive3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const rotateX = isHovering ? (mousePosition.y - 0.5) * 20 : 0;
  const rotateY = isHovering ? (mousePosition.x - 0.5) * -20 : 0;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Animated gradient orbs with mouse tracking */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20"
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          x: mousePosition.x * 50 - 100,
          y: mousePosition.y * 50 - 100,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-15"
        style={{
          rotateX: -rotateX,
          rotateY: -rotateY,
        }}
        animate={{
          x: -mousePosition.x * 30 + 50,
          y: -mousePosition.y * 30 + 50,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      />

      {/* Spotlight effect following cursor */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none"
          animate={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-cyan-500/20 rounded-3xl"
        animate={{
          rotateZ: 360,
          y: [0, -20, 0],
        }}
        transition={{
          rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-blue-500/20 rounded-full"
        animate={{
          rotateZ: -360,
          y: [0, 20, 0],
        }}
        transition={{
          rotateZ: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          x: -mousePosition.x * 15,
          y: -mousePosition.y * 15,
        }}
      />
    </div>
  );
}
