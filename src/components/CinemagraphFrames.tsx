'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (slug: string) => {
    if (!isScrolling) {
      window.location.href = slug;
    }
  };

  const handleScroll = () => {
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 150);
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
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x'
          }}
          onScroll={handleScroll}
        >
          <div className="flex gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 relative group cursor-pointer w-[85vw] md:w-[70vw] min-w-[300px] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-700 ease-[0.19,1,0.22,1]"
                onClick={() => handleProjectClick(project.slug)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`relative h-[600px] overflow-hidden cinemagraph-${project.motionType}`}>
                  {/* Static image with cinemagraph motion overlay */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 70vw"
                    priority={false}
                  />
                  
                  {/* Subtle overlay that fades on hover */}
                  <div className={`absolute inset-0 bg-black/10 transition-opacity duration-600 ${
                    hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                  }`} />
                  
                  {/* Minimal text overlay - bottom left */}
                  <div className="absolute bottom-8 left-8 z-10">
                    <h3 
                      className={`text-white mb-2 transition-opacity duration-600 ease-[0.19,1,0.22,1] ${
                        hoveredProject === project.id ? 'opacity-70' : 'opacity-100'
                      }`}
                      style={{
                        fontFamily: 'GT Sectra Fine, serif',
                        fontSize: '32px',
                        lineHeight: '1.3',
                        fontWeight: 400
                      }}
                    >
                      {project.name}
                    </h3>
                    
                    {/* Additional detail text that appears on hover */}
                    <p 
                      className={`text-white/90 transition-all duration-800 ease-[0.19,1,0.22,1] ${
                        hoveredProject === project.id 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-5'
                      }`}
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.5',
                        fontWeight: 300
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
