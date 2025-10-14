export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Company Info */}
          <div>
            <h3 
              className="mb-8"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 400
              }}
            >
              FORMA
            </h3>
            <p 
              className="text-[#6C6C6C] mb-8"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '1.6',
                fontWeight: 300
              }}
            >
              Boutique interior design agency specializing in modern, architectural spaces that fuse minimalism with warmth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 
              className="mb-8"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '1.6',
                fontWeight: 500,
                letterSpacing: '0.05em'
              }}
            >
              Navigation
            </h4>
            <nav className="space-y-4">
              {['Work', 'Studio', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-[#6C6C6C] hover:text-white transition-all duration-600 hover:opacity-100 hover:translateY-[-4px]"
                  style={{
                    fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    fontWeight: 300
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-8"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '1.6',
                fontWeight: 500,
                letterSpacing: '0.05em'
              }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <p 
                className="text-[#6C6C6C]"
                style={{
                  fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  fontWeight: 300
                }}
              >
                Email
              </p>
              <p 
                className="text-[#6C6C6C]"
                style={{
                  fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  fontWeight: 300
                }}
              >
                Phone Number
              </p>
              <p 
                className="text-[#6C6C6C]"
                style={{
                  fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  fontWeight: 300
                }}
              >
                Location
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p 
              className="text-[#6C6C6C] mb-4 md:mb-0"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '1.5',
                fontWeight: 300
              }}
            >
              © 2025 FORMA. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a 
                href="/privacy" 
                className="text-[#6C6C6C] hover:text-white transition-all duration-600 hover:opacity-100 hover:translateY-[-4px]"
                style={{
                  fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  fontWeight: 300
                }}
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-[#6C6C6C] hover:text-white transition-all duration-600 hover:opacity-100 hover:translateY-[-4px]"
                style={{
                  fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  fontWeight: 300
                }}
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
