import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  animationClass: string,
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

// Predefined animation hooks for common effects
export const useFadeInUp = (options?: ScrollAnimationOptions) =>
  useScrollAnimation('animate-fade-in-up', options);

export const useSlideInLeft = (options?: ScrollAnimationOptions) =>
  useScrollAnimation('animate-slide-in-left', options);

export const useSlideInRight = (options?: ScrollAnimationOptions) =>
  useScrollAnimation('animate-slide-in-right', options);

export const useScaleIn = (options?: ScrollAnimationOptions) =>
  useScrollAnimation('animate-scale-in', options);

export const useBounceIn = (options?: ScrollAnimationOptions) =>
  useScrollAnimation('animate-bounce-in', options);

export const useStaggerReveal = (options?: ScrollAnimationOptions) =>
  useScrollAnimation('animate-stagger-reveal', options);

export const useRotateIn = (options?: ScrollAnimationOptions) =>
  useScrollAnimation('animate-rotate-in', options);