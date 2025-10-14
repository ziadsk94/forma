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
  materials: Array<{ name: string; description: string; image: string }>;
  process: Array<{ step: number; title: string; description: string; image: string }>;
  credits: Array<{ role: string; name: string }>;
  backgroundTone: 'light' | 'dark';
}

// Mock data - in real app this would come from CMS
const caseStudies: Record<string, CaseStudyData> = {
  'aera-studio': {
    id: 'aera-studio',
    title: 'Aera Studio',
    category: 'Workspace',
    heroImage: '/assets/images/projects/Aera Studio/aera-1.png',
    overview: 'Biophilic modern interior — open-plan workspace with large skylight, lush indoor greenery, white oak floors, and raw concrete textures. Gentle natural light with foggy morning atmosphere and soft color palette of green-gray tones.',
    gallery: [
      '/assets/images/projects/Aera Studio/aera-1.png',
      '/assets/images/projects/Aera Studio/aera-2.png',
      '/assets/images/projects/Aera Studio/aera-3.png'
    ],
    materials: [
      { name: 'White Oak Floors', description: 'Natural white oak flooring with warm grain', image: '/assets/images/projects/Aera Studio/oak-wood.jpg' },
      { name: 'Raw Concrete', description: 'Raw concrete textures with industrial character', image: '/assets/images/projects/Aera Studio/concrete.jfif' },
      { name: 'Indoor Greenery', description: 'Lush indoor plants for biophilic connection', image: '/assets/images/projects/Aera Studio/greenery.jfif' }
    ],
    process: [
      { step: 1, title: 'Concept Development', description: 'Initial spatial analysis and concept development', image: '/assets/images/projects/Aera Studio/concept.png' },
      { step: 2, title: 'Material Selection', description: 'Curating materials that enhance the natural light', image: '/assets/images/projects/Aera Studio/material-selection.png' },
      { step: 3, title: 'Construction', description: 'Precise execution of design details', image: '/assets/images/projects/Aera Studio/construction.png' }
    ],
    credits: [
      { role: 'Design Director', name: '[name]' },
      { role: 'Project Manager', name: '[name]' },
      { role: 'Lighting Designer', name: '[name]' }
    ],
    backgroundTone: 'light'
  },
  'noire-loft': {
    id: 'noire-loft',
    title: 'Noire Loft',
    category: 'Residential',
    heroImage: '/assets/images/projects/Noire Loft/noire-1.png',
    overview: 'High-end penthouse interior in monochrome palette — matte black cabinetry, grey microcement walls, dark marble surfaces. Dramatic directional lighting with soft ambient glow accentuating edges.',
    gallery: [
      '/assets/images/projects/Noire Loft/noire-1.png',
      '/assets/images/projects/Noire Loft/noire-2.png',
      '/assets/images/projects/Noire Loft/noire-3.png',
      '/assets/images/projects/Noire Loft/noire-4.png',
      '/assets/images/projects/Noire Loft/noire-5.png'
    ],
    materials: [
      { name: 'Matte Black Cabinetry', description: 'Sleek matte black cabinetry with minimal hardware', image: '/assets/images/projects/Noire Loft/matte.jpg' },
      { name: 'Grey Microcement', description: 'Smooth grey microcement walls with industrial texture', image: '/assets/images/projects/Noire Loft/grey-microcement.jfif' },
      { name: 'Dark Marble', description: 'Dark marble surfaces with dramatic veining', image: '/assets/images/projects/Noire Loft/dark-marble.jfif' }
    ],
    process: [
      { step: 1, title: 'Mood Development', description: 'Creating the dark luxury concept', image: '/assets/images/projects/Noire Loft/mood.png' },
      { step: 2, title: 'Lighting Design', description: 'Strategic lighting to enhance shadows', image: '/assets/images/projects/Noire Loft/lighting.png' },
      { step: 3, title: 'Material Integration', description: 'Harmonizing dark materials', image: '/assets/images/projects/Noire Loft/material-int.png' }
    ],
    credits: [
      { role: 'Design Director', name: '[name]' },
      { role: 'Project Manager', name: '[name]' },
      { role: 'Lighting Designer', name: '[name]' }
    ],
    backgroundTone: 'dark'
  },
  'lume-residence': {
    id: 'lume-residence',
    title: 'Lume Residence',
    category: 'Residential',
    heroImage: '/assets/images/projects/Lume Residence/lume-1.png',
    overview: 'Minimalist luxury home interior emphasizing light and shadow. Clean lines, white walls, travertine surfaces, and reflective glass partitions. Morning sunlight cutting through creates long soft shadows on floor.',
    gallery: [
      '/assets/images/projects/Lume Residence/lume-1.png',
      '/assets/images/projects/Lume Residence/lume-2.png',
      '/assets/images/projects/Lume Residence/lume-3.png',
      '/assets/images/projects/Lume Residence/lume-4.png'
    ],
    materials: [
      { name: 'Travertine', description: 'Natural travertine surfaces with warm tones', image: '/assets/images/projects/Lume Residence/travertine.jpg' },
      { name: 'Reflective Glass', description: 'Glass partitions for light reflection', image: '/assets/images/projects/Lume Residence/glass.jpg' },
      { name: 'White Walls', description: 'Clean white walls for light diffusion', image: '/assets/images/projects/Lume Residence/white-wall-texture.jpg' }
    ],
    process: [
      { step: 1, title: 'Light Analysis', description: 'Studying natural light patterns', image: '/assets/images/projects/Lume Residence/light-analysis.png' },
      { step: 2, title: 'Family Flow', description: 'Designing for family dynamics', image: '/assets/images/projects/Lume Residence/family-flow.png' },
      { step: 3, title: 'Material Harmony', description: 'Creating cohesive material palette', image: '/assets/images/projects/Lume Residence/material-harmony.png' }
    ],
    credits: [
      { role: 'Design Director', name: '[name]' },
      { role: 'Project Manager', name: '[name]' },
      { role: 'Lighting Designer', name: '[name]' }
    ],
    backgroundTone: 'light'
  },
  'terra-studio': {
    id: 'terra-studio',
    title: 'Terra Studio',
    category: 'Residential',
    heroImage: '/assets/images/projects/Terra Studio/terra-studio-1.png',
    overview: 'Contemporary interior infused with earthy textures and organic forms. Clay plaster walls, beige linen upholstery, raw wood shelving, and stone textures. Sunlight filtering through sheer curtains creates warm, desaturated tones.',
    gallery: [
      '/assets/images/projects/Terra Studio/terra-studio-1.png',
      '/assets/images/projects/Terra Studio/terra-studio-2.png',
      '/assets/images/projects/Terra Studio/terra-studio-3.png',
      '/assets/images/projects/Terra Studio/terra-studio-4.png',
      '/assets/images/projects/Terra Studio/terra-studio-5.png'
    ],
    materials: [
      { name: 'Clay Plaster', description: 'Natural clay plaster walls with organic texture', image: '/assets/images/projects/Terra Studio/clay.jpg' },
      { name: 'Linen Upholstery', description: 'Beige linen upholstery for soft comfort', image: '/assets/images/projects/Terra Studio/linen.jfif' },
      { name: 'Raw Wood', description: 'Raw wood shelving with natural grain', image: '/assets/images/projects/Terra Studio/raw-wood.jpg' }
    ],
    process: [
      { step: 1, title: 'Sustainability Focus', description: 'Selecting eco-friendly materials', image: '/assets/images/projects/Terra Studio/focus.png' },
      { step: 2, title: 'Organic Forms', description: 'Designing flowing, natural shapes', image: '/assets/images/projects/Terra Studio/organic-flows.png' },
      { step: 3, title: 'Biophilic Integration', description: 'Connecting interior with nature', image: '/assets/images/projects/Terra Studio/biophilic.png' }
    ],
    credits: [
      { role: 'Design Director', name: '[name]' },
      { role: 'Project Manager', name: '[name]' },
      { role: 'Sustainability Consultant', name: 'Green Design Co.' }
    ],
    backgroundTone: 'light'
  },
  'atelier-nord': {
    id: 'atelier-nord',
    title: 'Atelier Nord',
    category: 'Residential',
    heroImage: '/assets/images/projects/Atelier Nord/atelior-nord-1.png',
    overview: 'Modern Scandinavian apartment interior inspired by brutalist architecture. Raw concrete walls, oak panel accents, and blackened steel fixtures. Natural light from large windows casts geometric shadows.',
    gallery: [
      '/assets/images/projects/Atelier Nord/atelior-nord-1.png',
      '/assets/images/projects/Atelier Nord/atelior-nord-2.png',
      '/assets/images/projects/Atelier Nord/atelior-nord-3.png',
      '/assets/images/projects/Atelier Nord/atelior-nord-4.png',
      '/assets/images/projects/Atelier Nord/atelior-nord-5.png'
    ],
    materials: [
      { name: 'Raw Concrete', description: 'Exposed concrete walls with brutalist texture', image: '/assets/images/projects/Atelier Nord/raw-concrete.jpg' },
      { name: 'Oak Panels', description: 'Warm oak panel accents for contrast', image: '/assets/images/projects/Atelier Nord/oak-panels.jfif' },
      { name: 'Blackened Steel', description: 'Dark steel fixtures and hardware', image: '/assets/images/projects/Atelier Nord/steel.jpg' }
    ],
    process: [
      { step: 1, title: 'Nordic Inspiration', description: 'Studying Scandinavian design', image: '/assets/images/projects/Atelier Nord/inspiration.png' },
      { step: 2, title: 'Minimal Aesthetics', description: 'Refining clean design language', image: '/assets/images/projects/Atelier Nord/aesthetics.png' },
      { step: 3, title: 'Functional Beauty', description: 'Balancing form and function', image: '/assets/images/projects/Atelier Nord/functional.png' }
    ],
    credits: [
      { role: 'Design Director', name: '[name]' },
      { role: 'Project Manager', name: '[name]' },
      { role: 'Lighting Designer', name: 'Nordic Light Co.' }
    ],
    backgroundTone: 'light'
  },
  'casa-sera': {
    id: 'casa-sera',
    title: 'Casa Sera',
    category: 'Residential',
    heroImage: '/assets/images/projects/Casa Sera/casa-sera-1.png',
    overview: 'A serene Mediterranean villa interior bathed in late-afternoon light. Smooth white plaster walls, natural limestone floor, curved archways, and soft linen curtains. Minimal oak furniture and sculptural vases on stone surfaces.',
    gallery: [
      '/assets/images/projects/Casa Sera/casa-sera-1.png',
      '/assets/images/projects/Casa Sera/casa-sera-2.png',
      '/assets/images/projects/Casa Sera/casa-sera-3.png',
      '/assets/images/projects/Casa Sera/casa-sera-4.png',
      '/assets/images/projects/Casa Sera/casa-sera-5.png'
    ],
    materials: [
      { name: 'White Plaster', description: 'Smooth white plaster walls with natural texture', image: '/assets/images/projects/Casa Sera/white-plaster.jpg' },
      { name: 'Limestone Floor', description: 'Natural limestone flooring with warm tones', image: '/assets/images/projects/Casa Sera/limestone.jfif' },
      { name: 'Linen Curtains', description: 'Soft linen curtains for diffused light', image: '/assets/images/projects/Casa Sera/linen.jpg' }
    ],
    process: [
      { step: 1, title: 'Family Needs', description: 'Understanding family dynamics', image: '/assets/images/projects/Casa Sera/family-needs.png' },
      { step: 2, title: 'Comfort Design', description: 'Creating cozy, livable spaces', image: '/assets/images/projects/Casa Sera/comfort-appeal.png' },
      { step: 3, title: 'Timeless Appeal', description: 'Designing for longevity', image: '/assets/images/projects/Casa Sera/timeless-design.png' }
    ],
    credits: [
      { role: 'Design Director', name: '[name]' },
      { role: 'Project Manager', name: '[name]' },
      { role: 'Family Consultant', name: 'Home Harmony Co.' }
    ],
    backgroundTone: 'light'
  }
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  
  // Get the case study data based on the slug
  const caseStudyData = caseStudies[params.slug] || caseStudies['aera-studio'];

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
          backgroundColor: caseStudyData.backgroundTone === 'light' ? '#F8F6F3' : '#1A1A1A',
          opacity: backgroundOpacity
        }}
      />
      
      <Header />

      {/* Cinematic Hero */}
      <section className="relative h-screen w-full overflow-hidden light-reactive">
        <Image
          src={caseStudyData.heroImage}
          alt={caseStudyData.title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 
              className="text-white mb-4"
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
              className="text-white/80"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              {caseStudyData.category}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modular Blocks */}
      <div className="relative z-10">
        {/* Overview Section */}
        <section className="py-32 bg-[#F8F6F3]">
          <div className="max-w-[1440px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                        className="text-[#B88A6F] mb-4 block"
                        style={{
                          fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          letterSpacing: '0.05em'
                        }}
                      >
                        Step {step.step}
                      </span>
                      <h3 
                        className="text-white mb-4"
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudyData.credits.map((credit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.19, 1, 0.22, 1] }}
                  viewport={{ once: true }}
                >
                  <h3 
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: 'GT Sectra Fine, serif',
                      fontSize: '32px',
                      lineHeight: '1.3',
                      fontWeight: 400
                    }}
                  >
                    {credit.name}
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
                    {credit.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
