'use client';

import CinematicTransition from './CinematicTransition';
import { useMultiLayerScroll } from '../hooks/useMultiLayerScroll';
import { useScrollJack } from '../hooks/useCinematicMotion';

export default function IntroStatement() {
  const multiLayerRef = useMultiLayerScroll();
  const { handleScrollJack } = useScrollJack(1500);

  return (
    <section ref={multiLayerRef} className="py-32 bg-[#F8F6F3] light-reactive">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-[680px] mx-auto text-center">
          <CinematicTransition direction="up" duration={1.5} delay={0.2}>
            <p 
              className="fade-in text-layer text-[#1A1A1A] mb-8"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              At FORMA, we create interiors that speak through silence — spaces defined not by excess, but by balance, proportion, and emotion.
            </p>
          </CinematicTransition>
          
          <CinematicTransition direction="up" duration={1.5} delay={0.4}>
            <p 
              className="fade-in fade-in-delay-1 text-layer text-[#1A1A1A] mb-8"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              Every project is a study in restraint, where light moves across material surfaces to reveal depth, texture, and time.
            </p>
          </CinematicTransition>
          
          <CinematicTransition direction="up" duration={1.5} delay={0.6}>
            <p 
              className="fade-in fade-in-delay-2 text-layer text-[#1A1A1A]"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              Our approach transforms architecture into atmosphere — crafting environments that invite calm, clarity, and connection between people and place.
            </p>
          </CinematicTransition>
        </div>
      </div>
    </section>
  );
}
