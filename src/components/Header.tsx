'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      // Framerate-optimized scroll with requestAnimationFrame throttling
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 200);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/projects' },
    { name: 'Studio', href: '/studio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-[9999] bg-[#F8F6F3] border-b border-[#E4DFDA] nav-sticky ${isScrolled ? 'scrolled' : ''}`} 
      style={{ 
        position: 'sticky', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 9999,
        transform: 'none',
        willChange: 'auto'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center">
        {/* Left Nav Links */}
        <nav className="flex space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="cursor-pointer text-[#1A1A1A] hover:text-[#B88A6F] transition-all duration-600 hover:opacity-100 hover:translateY-[-4px]"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '14px',
                letterSpacing: '0.05em',
                fontWeight: 400
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 32px Gap */}
        <div className="w-8"></div>

        {/* Centered Logo */}
        <div className="flex justify-center items-center h-full">
          <Link href="/" className="transition-all duration-600 hover:opacity-80">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={isScrolled ? 48 : 72}
              height={isScrolled ? 48 : 72}
              priority
              className="transition-all duration-600 object-contain"
            />
          </Link>
        </div>

        {/* 32px Gap */}
        <div className="w-8"></div>

        {/* Right Nav Links */}
        <nav className="flex space-x-8">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="cursor-pointer text-[#1A1A1A] hover:text-[#B88A6F] transition-all duration-600 hover:opacity-100 hover:translateY-[-4px]"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '14px',
                letterSpacing: '0.05em',
                fontWeight: 400
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
