'use client'

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import TechStack from '@/components/sections/TechStack';

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen"
    >
      {/* Navigation Overlay (Optional placeholder) */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter text-white">
          RACHAM <span className="text-blue-500 underline decoration-2 underline-offset-4">AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-blue-400 transition-colors">Infrastructure</a>
          <a href="#tech" className="hover:text-blue-400 transition-colors">Tech Stack</a>
          <div className="flex items-center gap-2 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
             <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
             <span className="text-blue-400 text-xs uppercase tracking-widest">Systems Online</span>
          </div>
        </div>
      </nav>

      {/* Hero Section: High-Energy Entrance */}
      <section className="pt-32 pb-20">
        <Hero />
      </section>

      {/* Feature Section: The SOSBI & TaxPilot Showcase */}
      <section id="features" className="py-20">
        <Features />
      </section>

      {/* Tech Stack: The Architectural Tools */}
      <section id="tech" className="py-20">
        <TechStack />
      </section>

      {/* Footer Branding */}
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-gray-600 text-sm italic">
          © 2026 Racham Global AI Lab // Designed for Speed.
        </p>
      </footer>
    </motion.main>
  );
}