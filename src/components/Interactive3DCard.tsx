import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  backContent?: React.ReactNode;
}

export function Interactive3DCard({
  children,
  className = '',
  backContent,
}: Interactive3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * 15;
    const rotateYValue = ((centerX - x) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      className={`cursor-pointer ${className}`}
      style={{
        perspective: '1000px',
      }}
      animate={{
        rotateX,
        rotateY,
        rotateZ: isFlipped ? 180 : 0,
      }}
      transition={{
        rotateX: { type: 'spring', damping: 20, stiffness: 300 },
        rotateY: { type: 'spring', damping: 20, stiffness: 300 },
        rotateZ: { duration: 0.6, ease: 'easeInOut' },
      }}
    >
      <div
        style={{
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        {/* Front */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
          }}
          animate={{
            opacity: isFlipped ? 0 : 1,
            pointerEvents: isFlipped ? 'none' : 'auto',
          }}
        >
          {children}
        </motion.div>

        {/* Back */}
        {backContent && (
          <motion.div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              position: 'absolute',
              inset: 0,
            }}
            animate={{
              opacity: isFlipped ? 1 : 0,
              pointerEvents: isFlipped ? 'auto' : 'none',
            }}
          >
            {backContent}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
