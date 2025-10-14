'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CaseStudyData {
  id: string;
  title: string;
  category: string;
  heroImage: string;
  overview: string;
  gallery: string[];
  materials: { name: string; description: string; image: string }[];
  process: { step: number; title: string; description: string; image: string }[];
  credits: { role: string; name: string }[];
  backgroundTone: 'light' | 'dark';
}

interface CaseStudyClientProps {
  caseStudyData: CaseStudyData;
}

export default function CaseStudyClient({ caseStudyData }: CaseStudyClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  
  // Handle gallery scroll progress
  const handleGalleryScroll = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(Math.min(progress, 100));
    }
  };

  return (
    <div className="min-h-screen">
      {/* Dynamic Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ 
          backgroundColor: caseStudyData.backgroundTone === 'dark' ? '#1A1A1A' : '#F8F6F3',
          opacity: backgroundOpacity
        }}
      ></motion.div>

      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <Image
            src={caseStudyData.heroImage}
            alt={`${caseStudyData.title} Hero Image`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-white text-center light-reactive"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <div>
              <h1 
                className="mb-4"
                style={{
                  fontFamily: 'GT Sectra Fine, serif',
                  fontSize: '72px',
                  lineHeight: '1.1',
                  fontWeight: 500
                }}
              >
                {caseStudyData.title}
              </h1>
              <p 
                className="text-xl"
                style={{
                  fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                  fontSize: '18px',
                  lineHeight: '1.7',
                  fontWeight: 300
                }}
              >
                {caseStudyData.category}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Overview Section */}
        <section className="py-32 bg-[#F8F6F3]">
          <div className="max-w-[1440px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
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
                className="text-[#6C6C6C] max-w-3xl"
                style={{
                  fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                  fontSize: '18px',
                  lineHeight: '1.7',
                  fontWeight: 300
                }}
              >
                {caseStudyData.overview}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 bg-[#1A1A1A]">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 
              className="text-white mb-16"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              Gallery
            </h2>
            
            {/* Horizontal Scroll Gallery */}
            <div className="relative">
              <div 
                ref={galleryRef}
                className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
                onScroll={handleGalleryScroll}
              >
                {caseStudyData.gallery.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-[400px] h-[500px]">
                    <Image
                      src={image}
                      alt={`${caseStudyData.title} - Image ${index + 1}`}
                      width={400}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              
              {/* Scroll Indicator */}
              <div className="flex items-center justify-center mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-300 ease-out"
                      style={{ width: `${scrollProgress}%` }}
                    ></div>
                  </div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
                <span 
                  className="ml-4 text-white/60"
                  style={{
                    fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                    fontSize: '14px',
                    letterSpacing: '0.05em'
                  }}
                >
                  Scroll to explore
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-32 bg-[#F8F6F3]">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 
              className="text-[#1A1A1A] mb-16"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              Materials
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudyData.materials.map((material, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.19, 1, 0.22, 1] }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-full h-[300px] mb-8 relative overflow-hidden">
                    <Image
                      src={material.image}
                      alt={material.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: 'GT Sectra Fine, serif',
                      fontSize: '32px',
                      lineHeight: '1.3',
                      fontWeight: 400
                    }}
                  >
                    {material.name}
                  </h3>
                  <p 
                    className="text-[#6C6C6C]"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      fontWeight: 300
                    }}
                  >
                    {material.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-[#1A1A1A]">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 
              className="text-white mb-16"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              Process
            </h2>
            
            <div className="space-y-16">
              {caseStudyData.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.19, 1, 0.22, 1] }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-full h-[400px] relative overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-white">
                      <span 
                        className="text-[#B88A6F] mb-2 block"
                        style={{
                          fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                          fontSize: '14px',
                          letterSpacing: '0.05em',
                          fontWeight: 400
                        }}
                      >
                        Step {step.step}
                      </span>
                      <h3 
                        className="mb-4"
                        style={{
                          fontFamily: 'GT Sectra Fine, serif',
                          fontSize: '32px',
                          lineHeight: '1.3',
                          fontWeight: 400
                        }}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="text-white/80"
                        style={{
                          fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                          fontSize: '18px',
                          lineHeight: '1.7',
                          fontWeight: 300
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credits Section */}
        <section className="py-32 bg-[#F8F6F3]">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 
              className="text-[#1A1A1A] mb-16"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              Credits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudyData.credits.map((credit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.19, 1, 0.22, 1] }}
                  viewport={{ once: true }}
                >
                  <p 
                    className="text-[#6C6C6C] mb-1"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      fontWeight: 400
                    }}
                  >
                    {credit.role}
                  </p>
                  <p 
                    className="text-[#1A1A1A]"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      fontWeight: 300
                    }}
                  >
                    {credit.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
