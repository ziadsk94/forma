'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

interface CinematicTransitionProps {
  children: React.ReactNode;
  direction?: 'in' | 'out' | 'up' | 'down';
  duration?: number;
  delay?: number;
}

export default function CinematicTransition({ 
  children, 
  direction = 'in', 
  duration = 1.2, 
  delay = 0 
}: CinematicTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    
    // Architectural reveal animation
    const tl = gsap.timeline({ delay });
    
    switch (direction) {
      case 'in':
        tl.fromTo(element, 
          { 
            opacity: 0, 
            scale: 0.8, 
            y: 100,
            rotationX: 15
          },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            rotationX: 0,
            duration,
            ease: "power3.out"
          }
        );
        break;
      case 'out':
        tl.to(element, 
          { 
            opacity: 0, 
            scale: 1.1, 
            y: -100,
            rotationX: -15,
            duration,
            ease: "power3.out"
          }
        );
        break;
      case 'up':
        tl.fromTo(element,
          { opacity: 0, y: 150, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration, ease: [0.19, 1, 0.22, 1] }
        );
        break;
      case 'down':
        tl.fromTo(element,
          { opacity: 0, y: -150, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration, ease: [0.19, 1, 0.22, 1] }
        );
        break;
    }
  }, [direction, duration, delay]);

  return (
    <div ref={containerRef} className="cinematic-reveal">
      {children}
    </div>
  );
}

// Page transition component
export function PageTransition({ children, isVisible }: { children: React.ReactNode; isVisible: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -50 }}
          transition={{ 
            duration: 0.8, 
            ease: "power3.out" // Architectural easing curve for cinematic feel
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Camera dolly effect
export function CameraDolly({ children, intensity = 1 }: { children: React.ReactNode; intensity?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ticking = false;
    
    const handleScroll = () => {
      // Framerate-optimized scroll with requestAnimationFrame throttling
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const dollyEffect = scrollY * intensity * 0.1;
          
          if (containerRef.current) {
            containerRef.current.style.transform = `translateZ(${dollyEffect}px) scale(${1 + dollyEffect * 0.01})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return (
    <div 
      ref={containerRef}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
}
