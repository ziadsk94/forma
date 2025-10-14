'use client';

import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface LottiePlanTracingProps {
  animationData: object;
  className?: string;
  triggerElement?: string;
}

export default function LottiePlanTracing({ 
  animationData, 
  className = "",
  triggerElement = ".plan-trigger"
}: LottiePlanTracingProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lottieRef.current) return;

    // Create scroll-triggered animation
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        if (lottieRef.current) {
          // Map scroll progress to animation progress
          const progress = self.progress;
          lottieRef.current.goToAndStop(progress * lottieRef.current.totalFrames, true);
        }
      }
    });

    // Fade in/out based on visibility
    gsap.fromTo(containerRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [triggerElement]);

  return (
    <div 
      ref={containerRef}
      className={`plan-tracing-container ${className}`}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

// Interior plan tracing with scroll sync
export function InteriorPlanTracing({ 
  plans, 
  className = "" 
}: { 
  plans: Array<{ id: string; animationData: object; title: string }>;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create staggered animations for multiple plans
    plans.forEach((plan, index) => {
      const planElement = containerRef.current?.querySelector(`[data-plan="${plan.id}"]`);
      if (planElement) {
        gsap.fromTo(planElement,
          { 
            opacity: 0, 
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: planElement,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, [plans]);

  return (
    <div ref={containerRef} className={`interior-plans ${className}`}>
      {plans.map((plan) => (
        <div 
          key={plan.id}
          data-plan={plan.id}
          className="plan-section"
        >
          <h3 className="plan-title">{plan.title}</h3>
          <LottiePlanTracing 
            animationData={plan.animationData}
            triggerElement={`[data-plan="${plan.id}"]`}
          />
        </div>
      ))}
    </div>
  );
}
