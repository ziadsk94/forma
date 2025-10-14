import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Get in Touch - FORMA Design Studio',
  'Ready to transform your space? Contact FORMA for luxury interior design services. Let\'s discuss your vision and create something extraordinary together.',
  '/contact'
);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
