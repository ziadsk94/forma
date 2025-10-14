'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  name: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: 'aera-studio',
    name: 'Aera Studio',
    image: '/assets/images/projects/Aera Studio/aera-1.png',
    slug: '/projects/aera-studio'
  },
  {
    id: 'noire-loft',
    name: 'Noire Loft',
    image: '/assets/images/projects/Noire Loft/noire-1.png',
    slug: '/projects/noire-loft'
  },
  {
    id: 'lume-residence',
    name: 'Lume Residence',
    image: '/assets/images/projects/Lume Residence/lume-1.png',
    slug: '/projects/lume-residence'
  },
  {
    id: 'terra-studio',
    name: 'Terra Studio',
    image: '/assets/images/projects/Terra Studio/terra-studio-1.png',
    slug: '/projects/terra-studio'
  },
  {
    id: 'atelier-nord',
    name: 'Atelier Nord',
    image: '/assets/images/projects/Atelier Nord/atelior-nord-1.png',
    slug: '/projects/atelier-nord'
  },
  {
    id: 'casa-sera',
    name: 'Casa Sera',
    image: '/assets/images/projects/Casa Sera/casa-sera-1.png',
    slug: '/projects/casa-sera'
  }
];

export default function FeaturedProjects() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (slug: string) => {
    setIsTransitioning(true);
    // Add smooth fade transition
    setTimeout(() => {
      window.location.href = slug;
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const containerWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        const scrollProgress = scrollLeft / containerWidth;
        
        // Update parallax effect for each project
        const projectElements = scrollContainerRef.current.querySelectorAll('.project-tile');
        projectElements.forEach((element, index) => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.left < window.innerWidth && rect.right > 0;
          
          if (isVisible) {
            const parallaxOffset = (rect.left / window.innerWidth) * 50;
            (element as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
          }
        });
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-32 bg-[#F8F6F3]">
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
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-tile flex-shrink-0 relative group cursor-pointer"
              style={{ width: '70vw' }}
              onClick={() => handleProjectClick(project.slug)}
            >
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="70vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 
                    className="text-white"
                    style={{
                      fontFamily: 'GT Sectra Fine, serif',
                      fontSize: '32px',
                      lineHeight: '1.3',
                      fontWeight: 400
                    }}
                  >
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="text-center mt-8">
          <p className="text-[#6C6C6C] text-sm">
            Scroll horizontally to explore projects
          </p>
        </div>
      </div>
      
      {/* Transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-[#F8F6F3] z-50 flex items-center justify-center">
          <div className="text-center">
            <h2 
              className="text-[#1A1A1A] mb-4"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 400
              }}
            >
              Loading Project...
            </h2>
          </div>
        </div>
      )}
    </section>
  );
}
