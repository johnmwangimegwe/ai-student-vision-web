
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealProps {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0
}: UseScrollRevealProps = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Set a timeout if delay is greater than 0
          if (delay > 0) {
            const timer = setTimeout(() => {
              setIsVisible(true);
              observer.unobserve(element);
            }, delay);
            
            return () => clearTimeout(timer);
          } else {
            setIsVisible(true);
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible };
}
