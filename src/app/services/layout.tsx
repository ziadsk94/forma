import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Our Services - Interior Design & Architecture',
  'Comprehensive interior design services from residential transformations to commercial spaces. Modern, minimalist design that reflects your vision and enhances your lifestyle.',
  '/services'
);

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
