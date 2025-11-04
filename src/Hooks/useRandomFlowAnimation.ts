import { useEffect, useRef, useState } from 'react';

export const useRandomFlowAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after animation triggers to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { containerRef, isVisible };
};