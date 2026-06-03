import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollSection({ children, className = '', delay = 0 }: ScrollSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={`perspective ${className}`}
      style={{
        perspective: '1000px',
      }}
    >
      {children}
    </motion.section>
  );
}
