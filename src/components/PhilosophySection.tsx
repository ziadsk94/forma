'use client';

export default function PhilosophySection() {
  return (
    <section className="py-32 bg-[#F8F6F3] light-reactive">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Block */}
          <div className="space-y-8">
            <h2 
              className="text-[#1A1A1A] mb-8"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              Our Philosophy
            </h2>
            
            <p 
              className="text-[#1A1A1A]"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              We believe that exceptional interior design transcends mere aesthetics to become a form of spatial poetry. Every material choice, every proportion, every interaction with light and shadow is carefully orchestrated to create environments that not only serve their function but elevate the human experience.
            </p>
            
            <p 
              className="text-[#1A1A1A]"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              Our approach is rooted in the belief that great design emerges from the intersection of architectural rigor and emotional resonance. We craft spaces that feel both timeless and contemporary, where every detail speaks to our commitment to craftsmanship and our deep understanding of how people truly live.
            </p>
          </div>
          
          {/* Right: Video */}
          <div className="relative h-[600px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/videos/Luxury_Interior_Design_Philosophy_Video.mp4" type="video/mp4" />
            </video>
            
            {/* Subtle overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
