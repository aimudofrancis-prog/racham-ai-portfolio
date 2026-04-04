'use client'
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-blue-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center">About</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">The Architect Behind the Code</h3>
      
      <motion.div 
        whileHover={{ y: -5 }}
        className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 overflow-hidden"
      >
        <Quote className="absolute top-6 left-6 text-blue-500/20" size={80} />
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic relative z-10">
          "Racham is not just about writing lines of code; it's about architecting 
          autonomous ecosystems. My mission is to bridge the gap between 
          complex AI infrastructure and SME efficiency in Nigeria."
        </p>
        <div className="mt-8 flex gap-4">
            <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">AI Strategy</span>
            <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">Architecture</span>
        </div>
      </motion.div>
    </section>
  );
}