'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import CinemagraphFrames from "@/components/CinemagraphFrames";
import PhilosophySection from "@/components/PhilosophySection";
import FooterTeaser from "@/components/FooterTeaser";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { useOptimizedScroll } from "@/hooks/useMultiLayerScroll";

export default function Home() {
  useOptimizedScroll();

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <Header />
      <main>
        <Hero />
        <IntroStatement />
        <CinemagraphFrames />
        <PhilosophySection />
        <FooterTeaser />
      </main>
      <Footer />
    </>
  );
}
