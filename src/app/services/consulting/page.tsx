'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const service = {
  id: 'consulting',
  title: 'Design Consulting',
  description: 'Strategic design guidance for existing spaces and design direction.',
  overview: 'Sometimes you need expert guidance without a full design service. Our consulting approach provides strategic design direction and optimization for your existing spaces.',
  process: [
    'Space assessment and analysis',
    'Design strategy development',
    'Recommendation presentation',
    'Implementation guidance',
    'Follow-up and refinement'
  ],
  deliverables: [
    'Comprehensive space analysis',
    'Strategic design recommendations',
    'Implementation roadmap',
    'Resource and vendor guidance',
    'Ongoing support plan'
  ],
  timeline: '4-6 weeks',
  backgroundImage: '/assets/images/projects/Terra Studio/terra-studio-1.png',
  projects: [
    {
      image: '/assets/images/projects/Casa Sera/casa-sera-1.png',
      title: 'Casa Sera',
      slug: '/projects/casa-sera'
    },
    {
      image: '/assets/images/projects/Terra Studio/terra-studio-1.png',
      title: 'Terra Studio',
      slug: '/projects/terra-studio'
    },
    {
      image: '/assets/images/projects/Atelier Nord/atelior-nord-1.png',
      title: 'Atelier Nord',
      slug: '/projects/atelier-nord'
    }
  ]
};

export default function ConsultingServicePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Header />
      
      <div ref={containerRef} className="pt-32 pb-32 light-reactive">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
              <Image
                src={service.backgroundImage}
                alt={service.title}
                fill
                className="object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Hero Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
                <h1 
                  className="text-white mb-8"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '72px',
                    lineHeight: '1.1',
                    fontWeight: 500
                  }}
                >
                  {service.title}
                </h1>
                <p 
                  className="text-white/90 max-w-3xl"
                  style={{
                    fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                    fontSize: '18px',
                    lineHeight: '1.7',
                    fontWeight: 300
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
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
              Overview
            </h2>
            <p 
              className="text-[#6C6C6C] max-w-4xl"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              {service.overview}
            </p>
          </motion.section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 
              className="text-[#1A1A1A] mb-16"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              Our Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/50 backdrop-blur-sm border border-[#E4DFDA]"
                >
                  <div className="flex items-center mb-4">
                    <span 
                      className="text-[#B88A6F] mr-4"
                      style={{
                        fontFamily: 'GT Sectra Fine, serif',
                        fontSize: '32px',
                        fontWeight: 400
                      }}
                    >
                      {index + 1}
                    </span>
                    <div className="w-full h-px bg-[#E4DFDA]" />
                  </div>
                  <p 
                    className="text-[#6C6C6C]"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      fontWeight: 300
                    }}
                  >
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Project Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 
              className="text-[#1A1A1A] mb-16"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              Related Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => window.location.href = project.slug}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <span 
                      className="text-white"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {project.title}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline & CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-sm p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 
                  className="text-[#1A1A1A] mb-8"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '32px',
                    lineHeight: '1.3',
                    fontWeight: 400
                  }}
                >
                  Timeline
                </h3>
                <p 
                  className="text-[#6C6C6C] mb-8"
                  style={{
                    fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                    fontSize: '18px',
                    lineHeight: '1.7',
                    fontWeight: 300
                  }}
                >
                  {service.timeline}
                </p>
                
                <h3 
                  className="text-[#1A1A1A] mb-8"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '32px',
                    lineHeight: '1.3',
                    fontWeight: 400
                  }}
                >
                  Deliverables
                </h3>
                <ul className="space-y-4">
                  {service.deliverables.map((item, index) => (
                    <li 
                      key={index}
                      className="text-[#6C6C6C] flex items-start"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        fontWeight: 300
                      }}
                    >
                      <span className="text-[#B88A6F] mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05, opacity: 1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                  className="bg-[#1A1A1A] text-white px-16 py-8 mb-8 transition-all duration-600 hover:bg-[#B88A6F] hover:opacity-100 hover:translateY-[-4px]"
                  style={{
                    fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                    fontSize: '18px',
                    fontWeight: 400,
                    letterSpacing: '0.05em'
                  }}
                >
                  Start Your Consulting Project
                </motion.button>
                
                <p 
                  className="text-[#6C6C6C]"
                  style={{
                    fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    fontWeight: 300
                  }}
                >
                  Need strategic guidance? Let's discuss your space.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
