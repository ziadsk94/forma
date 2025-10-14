'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useMultiLayerScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Text layers move at different speeds
    const textLayers = containerRef.current.querySelectorAll('.text-layer');
    const imageLayers = containerRef.current.querySelectorAll('.image-layer');
    const backgroundLayers = containerRef.current.querySelectorAll('.background-layer');

    // Text moves slower (more sticky)
    textLayers.forEach((layer) => {
      gsap.to(layer, {
        y: -100,
        scrollTrigger: {
          trigger: layer,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    });

    // Images move at medium speed
    imageLayers.forEach((layer) => {
      gsap.to(layer, {
        y: -200,
        scrollTrigger: {
          trigger: layer,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    });

    // Background moves fastest
    backgroundLayers.forEach((layer) => {
      gsap.to(layer, {
        y: -300,
        scrollTrigger: {
          trigger: layer,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return containerRef;
};

// Framerate-optimized inertia scroll
export const useOptimizedScroll = () => {
  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let velocity = 0;
    let lastTime = performance.now();

    const updateScroll = () => {
      // Throttle scroll events for performance using requestAnimationFrame
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const currentTime = performance.now();
          const deltaTime = currentTime - lastTime;
          
          // Calculate scroll velocity for inertia
          velocity = (currentScrollY - lastScrollY) / deltaTime;
          
          // Apply framerate-optimized inertia scroll
          if (Math.abs(velocity) > 0.5) {
            // High velocity - use auto scroll for performance
            document.documentElement.style.scrollBehavior = 'auto';
          } else {
            // Low velocity - use smooth scroll for elegance
            document.documentElement.style.scrollBehavior = 'smooth';
          }
          
          lastScrollY = currentScrollY;
          lastTime = currentTime;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', updateScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);
};
