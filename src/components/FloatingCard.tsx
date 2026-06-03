import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

export function FloatingElement({ children, delay = 0 }: FloatingElementProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={floatVariants}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
