'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
      {/* Mobile Layout */}
      <div className="md:hidden w-full px-8 h-full flex items-center justify-between">
        {/* Mobile Logo - Far Left */}
        <div className="flex items-center">
          <Link href="/" className="transition-all duration-600 hover:opacity-80" onClick={closeMobileMenu}>
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={isScrolled ? 40 : 56}
              height={isScrolled ? 40 : 56}
              priority
              className="transition-all duration-600 object-contain"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Button - Far Right */}
        <button
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-[1440px] mx-auto px-8 h-full items-center">
        {/* Desktop Navigation - Left Links */}
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

        {/* Desktop Centered Logo */}
        <div className="flex justify-center items-center h-full flex-1">
          <Link href="/" className="transition-all duration-600 hover:opacity-80" onClick={closeMobileMenu}>
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

        {/* Desktop Navigation - Right Links */}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9998] bg-[#F8F6F3] pt-20">
          {/* Close Button */}
          <div className="absolute top-8 right-8">
            <button
              onClick={closeMobileMenu}
              className="flex justify-center items-center w-8 h-8"
              aria-label="Close mobile menu"
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#1A1A1A] -translate-x-1/2 -translate-y-1/2 rotate-45" />
                <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#1A1A1A] -translate-x-1/2 -translate-y-1/2 -rotate-45" />
              </div>
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-8 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-[#1A1A1A] hover:text-[#B88A6F] transition-all duration-600 text-xl"
                style={{
                  fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                  letterSpacing: '0.05em',
                  fontWeight: 400
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
