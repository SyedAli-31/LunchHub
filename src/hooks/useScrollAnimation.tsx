// src/hooks/useScrollAnimation.ts

'use client';

import { useEffect, useState, useRef, MutableRefObject } from 'react';

interface ScrollOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Hook to detect when an element is visible in the viewport
 * and trigger animations based on scroll position
 */
export const useScrollAnimation = <T extends HTMLElement>(
  options: ScrollOptions = {}
): [MutableRefObject<T | null>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);
  const alreadyVisible = useRef(false);

  useEffect(() => {
    if (alreadyVisible.current && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            alreadyVisible.current = true;
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
};

export default useScrollAnimation;
