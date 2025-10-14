'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CinemagraphProject {
  id: string;
  name: string;
  image: string;
  motionType: 'curtain' | 'light' | 'reflection' | 'texture' | 'breeze' | 'warmth';
  description: string;
  slug: string;
}

const projects: CinemagraphProject[] = [
  {
    id: 'aera-studio',
    name: 'Aera Studio',
    image: '/assets/images/projects/Aera Studio/aera-1.png',
    motionType: 'curtain',
    description: 'Minimalist workspace with flowing natural light',
    slug: '/projects/aera-studio'
  },
  {
    id: 'noire-loft',
    name: 'Noire Loft',
    image: '/assets/images/projects/Noire Loft/noire-1.png',
    motionType: 'light',
    description: 'Dark luxury with subtle shadow play',
    slug: '/projects/noire-loft'
  },
  {
    id: 'lume-residence',
    name: 'Lume Residence',
    image: '/assets/images/projects/Lume Residence/lume-1.png',
    motionType: 'reflection',
    description: 'Light-filled home with gentle reflections',
    slug: '/projects/lume-residence'
  },
  {
    id: 'terra-studio',
    name: 'Terra Studio',
    image: '/assets/images/projects/Terra Studio/terra-studio-1.png',
    motionType: 'texture',
    description: 'Natural materials with organic textures',
    slug: '/projects/terra-studio'
  },
  {
    id: 'atelier-nord',
    name: 'Atelier Nord',
    image: '/assets/images/projects/Atelier Nord/atelior-nord-1.png',
    motionType: 'breeze',
    description: 'Nordic minimalism with airy movement',
    slug: '/projects/atelier-nord'
  },
  {
    id: 'casa-sera',
    name: 'Casa Sera',
    image: '/assets/images/projects/Casa Sera/casa-sera-1.png',
    motionType: 'warmth',
    description: 'Warm family home with cozy ambiance',
    slug: '/projects/casa-sera'
  }
];

export default function CinemagraphFrames() {
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const handleDrag = (event: any, info: any) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      const maxScroll = containerWidth - clientWidth;
      
      x.set(Math.max(0, Math.min(maxScroll, -info.offset.x)));
    }
  };

  const handleProjectClick = (slug: string) => {
    window.location.href = slug;
  };

  return (
    <section className="py-32 bg-[#F8F6F3] light-reactive">
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 
          className="text-center mb-16 text-[#1A1A1A]"
          style={{
            fontFamily: 'GT Sectra Fine, serif',
            fontSize: '48px',
            lineHeight: '1.2',
            fontWeight: 400
          }}
        >
          Featured Projects
        </h2>
        
        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <motion.div
            className="flex gap-8"
            style={{ x: springX }}
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            onDrag={handleDrag}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="flex-shrink-0 relative group cursor-pointer"
                style={{ width: '70vw' }}
                onClick={() => !isDragging && handleProjectClick(project.slug)}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ scale: 1.03, opacity: 1, y: -4 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className={`relative h-[600px] overflow-hidden cinemagraph-${project.motionType}`}>
                  {/* Static image with cinemagraph motion overlay */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="70vw"
                  />
                  
                  {/* Subtle overlay that fades on hover */}
                  <div className={`absolute inset-0 bg-black/10 transition-opacity duration-600 ${
                    hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                  }`} />
                  
                  {/* Minimal text overlay - bottom left */}
                  <div className="absolute bottom-8 left-8 z-10">
                    <motion.h3 
                      className="text-white mb-2"
                      style={{
                        fontFamily: 'GT Sectra Fine, serif',
                        fontSize: '32px',
                        lineHeight: '1.3',
                        fontWeight: 400
                      }}
                      initial={{ opacity: 1 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 0.7 : 1 
                      }}
                      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    >
                      {project.name}
                    </motion.h3>
                    
                    {/* Additional detail text that appears on hover */}
                    <motion.p 
                      className="text-white/90"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.5',
                        fontWeight: 300
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20
                      }}
                      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    >
                      {project.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="text-center mt-8">
          <p className="text-[#6C6C6C] text-sm">
            Drag or scroll to explore projects
          </p>
        </div>
      </div>
    </section>
  );
}
