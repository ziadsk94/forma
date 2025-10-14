import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Our Projects - Luxury Interior Design Portfolio',
  'Explore our portfolio of luxury interior design projects including residential homes, commercial spaces, and architectural design. Modern, minimalist spaces that fuse warmth with sophistication.',
  '/projects'
);

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
