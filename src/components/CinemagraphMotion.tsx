'use client';

import { useEffect, useRef } from 'react';

interface CinemagraphMotionProps {
  children: React.ReactNode;
  motionType: 'curtain' | 'light' | 'reflection' | 'texture' | 'breeze' | 'warmth';
  intensity?: number;
}

export default function CinemagraphMotion({ 
  children, 
  motionType, 
  intensity = 1 
}: CinemagraphMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Add motion class based on type
    container.classList.add(`cinemagraph-${motionType}`);
    
    // Set intensity via CSS custom property
    container.style.setProperty('--motion-intensity', intensity.toString());
  }, [motionType, intensity]);

  return (
    <div ref={containerRef} className="cinemagraph-container">
      {children}
    </div>
  );
}

// CSS animations for different motion types
export const cinemagraphStyles = `
  .cinemagraph-container {
    position: relative;
    overflow: hidden;
  }

  /* Curtain movement - gentle swaying */
  .cinemagraph-curtain::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10%;
    width: 120%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255,255,255,0.1) 20%, 
      rgba(255,255,255,0.05) 50%, 
      rgba(255,255,255,0.1) 80%, 
      transparent 100%
    );
    animation: curtainSway 4s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes curtainSway {
    0%, 100% { transform: translateX(-5px) skewX(-1deg); }
    50% { transform: translateX(5px) skewX(1deg); }
  }

  /* Light flicker - subtle brightness changes */
  .cinemagraph-light::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 20%, 
      rgba(255,255,255,0.1) 0%, 
      transparent 50%
    );
    animation: lightFlicker 3s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes lightFlicker {
    0%, 100% { opacity: 0.3; }
    25% { opacity: 0.6; }
    50% { opacity: 0.4; }
    75% { opacity: 0.7; }
  }

  /* Reflection shimmer - water-like movement */
  .cinemagraph-reflection::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255,255,255,0.2) 50%, 
      transparent 100%
    );
    animation: reflectionShimmer 4s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes reflectionShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }

  /* Texture movement - organic material flow */
  .cinemagraph-texture::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(139,69,19,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(160,82,45,0.1) 0%, transparent 50%);
    animation: textureFlow 5s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes textureFlow {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.05) rotate(1deg); }
  }

  /* Breeze movement - airy, floating motion */
  .cinemagraph-breeze::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.1) 0%, transparent 60%),
      radial-gradient(ellipse at 60% 80%, rgba(255,255,255,0.05) 0%, transparent 60%);
    animation: breezeFloat 6s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes breezeFloat {
    0%, 100% { transform: translateY(0px) scale(1); }
    33% { transform: translateY(-2px) scale(1.02); }
    66% { transform: translateY(1px) scale(0.98); }
  }

  /* Warmth movement - cozy, gentle glow */
  .cinemagraph-warmth::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, 
      rgba(255,248,220,0.1) 0%, 
      rgba(255,235,205,0.05) 50%, 
      transparent 100%
    );
    animation: warmthGlow 4s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes warmthGlow {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
  }
`;
