'use client'

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import TaxPilotShowcase from '@/components/sections/TaxPilotShowcase';
import TechStack from '@/components/sections/TechStack';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <TaxPilotShowcase />
      <TechStack />
    </main>
  );
}