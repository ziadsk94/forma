'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useCinematicMotion = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Skip if this is the header
    if (containerRef.current.tagName === 'HEADER') return;

    // Cinematic reveal animations
    const reveals = containerRef.current.querySelectorAll('.cinematic-reveal');
    
    reveals.forEach((element) => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 100,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Light-reactive shadow transitions
    const lightElements = containerRef.current.querySelectorAll('.light-reactive');
    
    lightElements.forEach((element) => {
      gsap.to(element, {
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const shadowIntensity = progress * 0.3;
            (element as HTMLElement).style.boxShadow = `0 ${20 + progress * 20}px ${40 + progress * 20}px rgba(0,0,0,${0.1 + shadowIntensity})`;
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return containerRef;
};

// Adaptive motion system with different easing curves
export const useAdaptiveMotion = () => {
  const uiEasing = "power2.out"; // Snappy for UI elements
  const contentEasing = "power3.out"; // Smooth for content
  const cinematicEasing = "power4.out"; // Dramatic for reveals

  const animateUI = (element: HTMLElement, props: object) => {
    return gsap.to(element, {
      ...props,
      duration: 0.6,
      ease: uiEasing
    });
  };

  const animateContent = (element: HTMLElement, props: object) => {
    return gsap.to(element, {
      ...props,
      duration: 1.2,
      ease: contentEasing
    });
  };

  const animateCinematic = (element: HTMLElement, props: object) => {
    return gsap.to(element, {
      ...props,
      duration: 2.0,
      ease: cinematicEasing
    });
  };

  return { animateUI, animateContent, animateCinematic };
};

// Scroll-jack segments for editorial emphasis (limited to 1.5s max)
export const useScrollJack = (duration: number = 1500) => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  
  // Ensure duration doesn't exceed 1.5s max for editorial emphasis
  const maxDuration = Math.min(duration, 1500);

  const handleScrollJack = (callback: () => void) => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    callback();
    
    // Lock scroll for editorial emphasis with max 1.5s duration
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, maxDuration);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return { handleScrollJack, isScrolling: isScrolling.current };
};
