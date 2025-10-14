import { Metadata } from 'next';

// Base URL for the website
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://forma-design.com';

// Default metadata for the site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'FORMA - Luxury Interior Design Studio',
    template: '%s | FORMA'
  },
  description: 'Design as spatial poetry. A boutique interior design agency specializing in modern, architectural spaces that fuse minimalism with warmth.',
  keywords: [
    'luxury interior design',
    'modern interior design',
    'architectural design',
    'residential design',
    'commercial design',
    'interior design studio',
    'contemporary architecture',
    'minimalist design',
    'spatial design',
    'design consultancy'
  ],
  authors: [{ name: 'FORMA Design Studio' }],
  creator: 'FORMA Design Studio',
  publisher: 'FORMA Design Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'FORMA',
    title: 'FORMA - Luxury Interior Design Studio',
    description: 'Design as spatial poetry. A boutique interior design agency specializing in modern, architectural spaces that fuse minimalism with warmth.',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FORMA Interior Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORMA - Luxury Interior Design Studio',
    description: 'Design as spatial poetry. A boutique interior design agency specializing in modern, architectural spaces that fuse minimalism with warmth.',
    images: ['/assets/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

// Page-specific metadata generators
export const generatePageMetadata = (
  title: string,
  description: string,
  path: string,
  images?: string[]
): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${baseUrl}${path}`,
    images: images?.map(img => ({
      url: img,
      width: 1200,
      height: 630,
      alt: title,
    })) || defaultMetadata.openGraph?.images,
  },
  twitter: {
    title,
    description,
    images: images || ['/assets/images/og-image.jpg'],
  },
  alternates: {
    canonical: `${baseUrl}${path}`,
  },
});

// Schema.org structured data generators
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FORMA',
  description: 'Luxury interior design studio specializing in modern, architectural spaces that fuse minimalism with warmth.',
  url: baseUrl,
  logo: `${baseUrl}/assets/images/logo.png`,
  sameAs: [
    'https://www.instagram.com/forma_design',
    'https://www.linkedin.com/company/forma-design',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Design Street',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
});

export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FORMA',
  url: baseUrl,
  description: 'Luxury interior design studio specializing in modern, architectural spaces.',
  publisher: {
    '@type': 'Organization',
    name: 'FORMA',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${baseUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const generateProjectSchema = (project: {
  name: string;
  description: string;
  images: string[];
  location?: string;
  dateCreated?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  description: project.description,
  image: project.images,
  creator: {
    '@type': 'Organization',
    name: 'FORMA',
  },
  dateCreated: project.dateCreated,
  locationCreated: project.location ? {
    '@type': 'Place',
    name: project.location,
  } : undefined,
  genre: 'Interior Design',
  keywords: 'interior design, architecture, modern design, luxury spaces',
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  url: `${baseUrl}${service.url}`,
  provider: {
    '@type': 'Organization',
    name: 'FORMA',
  },
  serviceType: 'Interior Design',
  areaServed: 'United States',
});

// SEO-friendly heading hierarchy
export const headingHierarchy = {
  home: {
    h1: 'Design as Spatial Poetry',
    h2: ['Our Philosophy', 'Featured Projects', 'View All Projects'],
    h3: ['Residential Design', 'Commercial Design', 'Design Consulting'],
  },
  about: {
    h1: 'Our Story',
    h2: ['Our Philosophy', 'Our Team', 'Our Process'],
    h3: ['Design Director', 'Project Manager', 'Creative Director'],
  },
  projects: {
    h1: 'Our Projects',
    h2: ['Featured Work', 'Residential Projects', 'Commercial Projects'],
    h3: ['Project Overview', 'Materials', 'Process', 'Credits'],
  },
  services: {
    h1: 'Our Services',
    h2: ['Residential Design', 'Commercial Design', 'Design Consulting'],
    h3: ['Overview', 'Process', 'Timeline', 'Deliverables'],
  },
  contact: {
    h1: 'Get in Touch',
    h2: ['Contact Information', 'Studio Location', 'Project Inquiry'],
    h3: ['Phone', 'Email', 'Address'],
  },
};

// Accessibility and semantic validation checklist
export const accessibilityChecklist = {
  semanticHTML: [
    'Use proper heading hierarchy (H1 → H2 → H3)',
    'Include alt text for all images',
    'Use semantic elements (header, nav, main, section, article, footer)',
    'Ensure logical tab order',
    'Include skip navigation links',
  ],
  performance: [
    'Optimize images with Next.js Image component',
    'Implement lazy loading for below-fold content',
    'Use proper image formats (WebP, AVIF)',
    'Minimize JavaScript bundle size',
    'Implement proper caching strategies',
  ],
  seo: [
    'Unique title tags for each page',
    'Meta descriptions between 140-160 characters',
    'Proper heading structure',
    'Schema markup implementation',
    'Canonical URLs',
    'XML sitemap',
    'Robots.txt',
  ],
};
