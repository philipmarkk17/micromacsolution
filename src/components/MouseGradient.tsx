import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MouseGradientProps {
  children: React.ReactNode;
  className?: string;
}

export function MouseGradient({ children, className = '' }: MouseGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => setIsInside(false);

    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        background: isInside
          ? `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
          : 'transparent',
      }}
    >
      <motion.div animate={{ opacity: isInside ? 1 : 0 }} transition={{ duration: 0.3 }}>
        {children}
      </motion.div>
    </div>
  );
}
