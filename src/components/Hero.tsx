'use client';

export default function Hero() {
  return (
    <section 
      className="hero-section relative w-full overflow-hidden" 
      style={{ position: 'relative', top: '-90px', height: 'calc(100vh + 90px)' }}
      aria-label="Hero section with main headline"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-label="Background video showcasing interior design work"
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* White tint overlay */}
        <div className="absolute inset-0 bg-white/20" aria-hidden="true"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        {/* Main Headline */}
        <h1 
          className="text-[#1A1A1A] fade-in"
          style={{
            fontFamily: 'GT Sectra Fine, serif',
            fontSize: '72px',
            lineHeight: '1.1',
            fontWeight: 500
          }}
        >
          Design as Spatial Poetry.
        </h1>
        <p className="sr-only">
          FORMA is a luxury interior design studio specializing in modern, architectural spaces that fuse minimalism with warmth. 
          We create residential and commercial spaces that embody spatial poetry through thoughtful design.
        </p>
      </div>

      {/* Scroll Cue at Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-cue" aria-label="Scroll down to explore more content">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#1A1A1A" 
            strokeWidth="1.5"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" fill="none" />
            <path d="M8 12l4 4 4-4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
