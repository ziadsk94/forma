'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StudioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Header />
      
      {/* Main Content */}
      <div ref={containerRef} className="pt-32 pb-32 light-reactive">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
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
              Studio
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
              We are a boutique interior design studio dedicated to creating spaces 
              that embody the philosophy of "Design as Spatial Poetry."
            </p>
          </motion.div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left Column - Text Content */}
            <div className="space-y-16">
              {/* Our Story */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Blueprint Animation Background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <motion.div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%231A1A1A' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                      backgroundSize: '40px 40px'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '40px 40px']
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: [0.19, 1, 0.22, 1]
                    }}
                  />
                </div>

                <h2 
                  className="text-[#1A1A1A] mb-8"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '48px',
                    lineHeight: '1.2',
                    fontWeight: 400
                  }}
                >
                  Our Story
                </h2>
                
                <div className="space-y-6">
                  <p 
                    className="text-[#6C6C6C]"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      fontWeight: 300
                    }}
                  >
                    Founded in 2018, FORMA emerged from a simple belief: that interior design 
                    should be more than decoration—it should be spatial poetry. Our journey began 
                    in a small studio where we questioned every convention, seeking to create 
                    spaces that speak to the soul.
                  </p>
                  
                  <p 
                    className="text-[#6C6C6C]"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      fontWeight: 300
                    }}
                  >
                    Today, we remain a boutique studio by choice. This allows us to approach 
                    each project with the attention and care it deserves, crafting spaces that 
                    are not just beautiful, but deeply meaningful to those who inhabit them.
                  </p>
                </div>
              </motion.section>

              {/* Our Values */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
                className="relative"
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
                  Our Values
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 
                      className="text-[#1A1A1A] mb-3"
                      style={{
                        fontFamily: 'GT Sectra Fine, serif',
                        fontSize: '32px',
                        lineHeight: '1.3',
                        fontWeight: 400
                      }}
                    >
                      Spatial Poetry
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
                      Every space tells a story. We believe in the power of proportion, 
                      light, and material to create emotional resonance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 
                      className="text-[#1A1A1A] mb-3"
                      style={{
                        fontFamily: 'GT Sectra Fine, serif',
                        fontSize: '32px',
                        lineHeight: '1.3',
                        fontWeight: 400
                      }}
                    >
                      Quiet Confidence
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
                      Our designs speak through restraint. We create spaces that feel 
                      effortless, where every element serves a purpose.
                    </p>
                  </div>
                  
                  <div>
                    <h3 
                      className="text-[#1A1A1A] mb-3"
                      style={{
                        fontFamily: 'GT Sectra Fine, serif',
                        fontSize: '32px',
                        lineHeight: '1.3',
                        fontWeight: 400
                      }}
                    >
                      Human-Centered
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
                      Behind every project are real people with real lives. We design 
                      for how people actually live, not how they should live.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Our Approach */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
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
                  Our Approach
                </h2>
                
                <div className="space-y-6">
                  <p 
                    className="text-[#6C6C6C]"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      fontWeight: 300
                    }}
                  >
                    We begin each project by listening. Not just to what you say, but to 
                    what your space whispers. We study how light moves through your rooms, 
                    how you move through your days, and how your space can better serve your life.
                  </p>
                  
                  <p 
                    className="text-[#6C6C6C]"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      fontWeight: 300
                    }}
                  >
                    Our process is collaborative, thoughtful, and always human. We believe 
                    that the best design emerges from understanding, not imposing. The result 
                    is spaces that feel both intentional and effortless—spaces that truly belong.
                  </p>
                </div>
              </motion.section>
            </div>

            {/* Right Column - Portrait */}
            <div className="relative h-[800px] lg:h-[100vh]">
              <motion.div
                style={{ y, scale }}
                className="relative w-full h-full overflow-hidden"
              >
                <Image
                  src="/assets/images/gettyimages-618963256-612x612.jpg"
                  alt="FORMA Studio Founders"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
              
              {/* Portrait Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="bg-white/90 backdrop-blur-sm p-6">
                  <h3 
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: 'GT Sectra Fine, serif',
                      fontSize: '32px',
                      lineHeight: '1.3',
                      fontWeight: 400
                    }}
                  >
                    [name] & [name]
                  </h3>
                  <p 
                    className="text-[#6C6C6C]"
                    style={{
                      fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.5',
                      fontWeight: 300
                    }}
                  >
                    Co-Founders & Design Directors
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Studio Stats */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="mt-32 pt-16 border-t border-[#E4DFDA]"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center">
                <h3 
                  className="text-[#1A1A1A] mb-2"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '48px',
                    lineHeight: '1.2',
                    fontWeight: 400
                  }}
                >
                  6+
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
                  Years of Excellence
                </p>
              </div>
              
              <div className="text-center">
                <h3 
                  className="text-[#1A1A1A] mb-2"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '48px',
                    lineHeight: '1.2',
                    fontWeight: 400
                  }}
                >
                  50+
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
                  Projects Completed
                </p>
              </div>
              
              <div className="text-center">
                <h3 
                  className="text-[#1A1A1A] mb-2"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '48px',
                    lineHeight: '1.2',
                    fontWeight: 400
                  }}
                >
                  100%
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
                  Client Satisfaction
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
