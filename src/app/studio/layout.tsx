import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Our Story - FORMA Design Studio',
  'Meet the creative minds behind FORMA. Learn about our design philosophy, process, and commitment to creating spaces that embody spatial poetry and architectural harmony.',
  '/studio'
);

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
