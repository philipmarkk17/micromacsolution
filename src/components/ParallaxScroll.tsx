import { useEffect, useRef, useState } from 'react';

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
}

export function ParallaxScroll({ children, offset = 50 }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementBottom > 0 && elementTop < windowHeight) {
          const scrolled = window.scrollY;
          const elemScrolled = scrolled - element.offsetTop;
          setOffsetY(elemScrolled * (offset / 100));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${offsetY}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
}
