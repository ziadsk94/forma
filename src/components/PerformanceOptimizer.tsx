'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero video
      const heroVideo = document.createElement('link');
      heroVideo.rel = 'preload';
      heroVideo.href = '/assets/videos/hero.mp4';
      heroVideo.as = 'video';
      document.head.appendChild(heroVideo);

      // Preload critical fonts
      const criticalFonts = [
        '/assets/fonts/GT-Sectra-Fine-Regular.woff2',
        '/assets/fonts/Neue-Haas-Grotesk-Regular.woff2',
      ];

      criticalFonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Track Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('LCP:', entry.startTime);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Track First Input Delay
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      }).observe({ entryTypes: ['first-input'] });

      // Track Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
            console.log('CLS:', (entry as PerformanceEntry & { value?: number }).value);
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    trackWebVitals();

    // Cleanup
    return () => {
      // Remove any cleanup logic if needed
    };
  }, []);

  return null;
}
