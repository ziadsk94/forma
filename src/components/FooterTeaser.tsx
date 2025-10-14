'use client';

import Link from 'next/link';

export default function FooterTeaser() {
  return (
    <section className="py-32 bg-[#F8F6F3] light-reactive">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center">
          <Link 
            href="/projects"
            className="clay-underline inline-block"
            style={{
              fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              fontWeight: 400,
              letterSpacing: '0.05em'
            }}
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
