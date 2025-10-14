'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  slug: string;
  side: 'left' | 'right';
}

const projects: Project[] = [
  {
    id: 'aera-studio',
    title: 'Aera Studio',
    category: 'Workspace',
    image: '/assets/images/projects/Aera Studio/aera-1.png',
    description: 'Nature in structure with biophilic design and lush indoor greenery',
    slug: '/projects/aera-studio',
    side: 'left'
  },
  {
    id: 'noire-loft',
    title: 'Noire Loft',
    category: 'Residential',
    image: '/assets/images/projects/Noire Loft/noire-1.png',
    description: 'Monochrome modernism with matte black cabinetry and dramatic lighting',
    slug: '/projects/noire-loft',
    side: 'right'
  },
  {
    id: 'lume-residence',
    title: 'Lume Residence',
    category: 'Residential',
    image: '/assets/images/projects/Lume Residence/lume-1.png',
    description: 'Architectural light with clean lines and travertine surfaces',
    slug: '/projects/lume-residence',
    side: 'left'
  },
  {
    id: 'terra-studio',
    title: 'Terra Studio',
    category: 'Residential',
    image: '/assets/images/projects/Terra Studio/terra-studio-1.png',
    description: 'Organic warmth with clay plaster walls and earthy textures',
    slug: '/projects/terra-studio',
    side: 'right'
  },
  {
    id: 'atelier-nord',
    title: 'Atelier Nord',
    category: 'Residential',
    image: '/assets/images/projects/Atelier Nord/atelior-nord-1.png',
    description: 'Nordic brutalism with raw concrete walls and oak panel accents',
    slug: '/projects/atelier-nord',
    side: 'left'
  },
  {
    id: 'casa-sera',
    title: 'Casa Sera',
    category: 'Residential',
    image: '/assets/images/projects/Casa Sera/casa-sera-1.png',
    description: 'Mediterranean minimalism with smooth white plaster walls and natural limestone',
    slug: '/projects/casa-sera',
    side: 'right'
  }
];

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Header />

      {/* Page Header */}
      <section className="py-32 bg-[#F8F6F3]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h1 
            className="text-[#1A1A1A] mb-8"
            style={{
              fontFamily: 'GT Sectra Fine, serif',
              fontSize: '72px',
              lineHeight: '1.1',
              fontWeight: 500
            }}
          >
            Our Projects
          </h1>
          <p 
            className="text-[#6C6C6C] max-w-2xl"
            style={{
              fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              fontWeight: 300
            }}
          >
            A curated selection of our most significant interior design projects, 
            each representing a unique approach to spatial poetry and architectural harmony.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="pb-32">
        {projects.map((project, index) => (
          <article key={project.id} className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Image Side */}
            <div className={`relative h-[600px] lg:h-screen ${
              project.side === 'left' ? 'lg:order-1' : 'lg:order-2'
            }`}>
              <Link href={project.slug}>
                <motion.div
                  className="relative h-full w-full overflow-hidden cursor-pointer"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ scale: 1.02, opacity: 1, y: -4 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-opacity duration-600 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-90'
                    }`}
                    sizes="50vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-600" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-8 left-8 z-10">
                    <span 
                      className="px-4 py-2 bg-white/90 text-[#1A1A1A] rounded-full"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Text Side */}
            <div className={`flex items-center justify-center p-16 ${
              project.side === 'left' ? 'lg:order-2' : 'lg:order-1'
            }`}>
              <div className="max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 
                    className="text-[#1A1A1A] mb-8"
                    style={{
                      fontFamily: 'GT Sectra Fine, serif',
                      fontSize: '48px',
                      lineHeight: '1.2',
                      fontWeight: 400
                    }}
                  >
                    {project.title}
                  </h2>
                  
                  <p 
                    className="text-[#6C6C6C] mb-8"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      fontWeight: 300
                    }}
                  >
                    {project.description}
                  </p>
                  
                  <Link 
                    href={project.slug}
                    className="clay-underline inline-block"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: '0.05em'
                    }}
                  >
                    View Case Study →
                  </Link>
                </motion.div>
              </div>
            </div>
          </article>
        ))}
      </main>
      
      <Footer />
    </div>
  );
}
