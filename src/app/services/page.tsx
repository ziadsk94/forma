'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  details: {
    overview: string;
    process: string[];
    deliverables: string[];
    timeline: string;
  };
  backgroundImage: string;
  projects: string[];
}

const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Design',
    shortTitle: 'Residential',
    description: 'Creating homes that reflect your lifestyle and values through thoughtful spatial design.',
    details: {
      overview: 'We transform houses into homes that tell your story. Our residential design service focuses on creating spaces that support your daily life while expressing your personal aesthetic.',
      process: [
        'Initial consultation and lifestyle analysis',
        'Spatial planning and concept development',
        'Material selection and specification',
        'Project management and coordination',
        'Installation and styling'
      ],
      deliverables: [
        'Complete design concept',
        'Detailed floor plans',
        'Material specifications',
        '3D visualizations',
        'Project timeline and budget'
      ],
      timeline: '8-12 weeks'
    },
    backgroundImage: '/assets/images/projects/Lume Residence/lume-1.png',
    projects: [
      '/assets/images/projects/Lume Residence/lume-1.png',
      '/assets/images/projects/Noire Loft/noire-1.png',
      '/assets/images/projects/Casa Sera/casa-sera-1.png'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Design',
    shortTitle: 'Commercial',
    description: 'Designing workspaces that inspire productivity and reflect your brand identity.',
    details: {
      overview: 'We create commercial spaces that enhance your business operations while reflecting your brand values. From offices to retail spaces, we design environments that work.',
      process: [
        'Brand analysis and space audit',
        'Workflow optimization planning',
        'Design concept development',
        'Technical documentation',
        'Implementation and handover'
      ],
      deliverables: [
        'Brand-aligned design concept',
        'Optimized space planning',
        'Technical drawings',
        'Material and finish specifications',
        'Implementation guide'
      ],
      timeline: '12-16 weeks'
    },
    backgroundImage: '/assets/images/projects/Aera Studio/aera-1.png',
    projects: [
      '/assets/images/projects/Aera Studio/aera-1.png',
      '/assets/images/projects/Terra Studio/terra-studio-1.png',
      '/assets/images/projects/Atelier Nord/atelior-nord-1.png'
    ]
  },
  {
    id: 'consulting',
    title: 'Design Consulting',
    shortTitle: 'Consulting',
    description: 'Strategic design guidance for existing spaces and design direction.',
    details: {
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
      timeline: '4-6 weeks'
    },
    backgroundImage: '/assets/images/projects/Terra Studio/terra-studio-1.png',
    projects: [
      '/assets/images/projects/Terra Studio/terra-studio-1.png',
      '/assets/images/projects/Atelier Nord/atelior-nord-1.png',
      '/assets/images/projects/Aera Studio/aera-1.png'
    ]
  }
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Header />
      
      <div ref={containerRef} className="pt-32 pb-32 light-reactive">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h1 
              className="text-[#1A1A1A] mb-8"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '72px',
                lineHeight: '1.1',
                fontWeight: 500
              }}
            >
              Services
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
              We offer comprehensive design services tailored to your needs, 
              from complete residential transformations to strategic consulting.
            </p>
          </motion.div>


          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.19, 1, 0.22, 1]
                }}
                className="relative group"
              >
                {/* Service Panel */}
                <Link href={`/services/${service.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, opacity: 1, y: -4 }}
                    transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    className="relative overflow-hidden cursor-pointer h-[500px]"
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Background Image */}
                    <Image
                      src={service.backgroundImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                    
                    {/* Glass Blur Overlay */}
                    <motion.div
                      animate={{ 
                        backdropFilter: hoveredService === service.id ? 'blur(10px)' : 'blur(0px)',
                        backgroundColor: hoveredService === service.id ? 'rgba(248, 246, 243, 0.8)' : 'rgba(248, 246, 243, 0.3)'
                      }}
                      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                      className="absolute inset-0"
                    />
                    
                    {/* Border Highlight */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === service.id ? 1 : 0,
                        scale: hoveredService === service.id ? 1 : 0.95
                      }}
                      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                      className="absolute inset-0 border-2 border-[#B88A6F]"
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <div>
                        <h2 
                          className="text-[#1A1A1A] mb-4"
                          style={{
                            fontFamily: 'GT Sectra Fine, serif',
                            fontSize: '32px',
                            lineHeight: '1.2',
                            fontWeight: 400
                          }}
                        >
                          {service.title}
                        </h2>
                        <p 
                          className="text-[#6C6C6C] text-sm"
                          style={{
                            fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            fontWeight: 300
                          }}
                        >
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <motion.span 
                          className="text-[#B88A6F] relative"
                          style={{
                            fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                            fontSize: '14px',
                            fontWeight: 400,
                            letterSpacing: '0.05em'
                          }}
                          whileHover={{ scale: 1.05, opacity: 1, y: -4 }}
                        >
                          <span className="relative z-10">Learn More →</span>
                          <motion.div
                            className="absolute bottom-0 left-0 h-px bg-[#B88A6F]"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                          />
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>


          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-32 pt-16 border-t border-[#E4DFDA] text-center"
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
              Ready to Begin?
            </h2>
            <p 
              className="text-[#6C6C6C] mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
                      Let&apos;s discuss your project and explore how we can bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, opacity: 1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="bg-[#1A1A1A] text-white px-8 py-4 transition-all duration-600 hover:bg-[#B88A6F] hover:opacity-100 hover:translateY-[-4px]"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.05em'
              }}
            >
              Start Your Project
            </motion.button>
          </motion.section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
