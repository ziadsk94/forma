import CaseStudyClient from '@/components/CaseStudyClient';

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
    overview: 'A serene Mediterranean villa interior bathed in late-afternoon light. Smooth white plaster walls, natural limestone floor, curved archways, and soft linen curtains.',
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

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const caseStudyData = caseStudies[resolvedParams.slug] || caseStudies['aera-studio'];

  return <CaseStudyClient caseStudyData={caseStudyData} />;
}