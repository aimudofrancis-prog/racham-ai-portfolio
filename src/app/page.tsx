'use client'

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import TaxPilotShowcase from '@/components/sections/TaxPilotShowcase';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact'; // New Import
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] overflow-x-hidden pt-20">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="features"><Features /></div>
      <div id="taxpilot"><TaxPilotShowcase /></div>
      <div id="tech"><TechStack /></div>
      <div id="contact"><Contact /></div> {/* New Section */}
      <Footer />
    </main>
  );
}