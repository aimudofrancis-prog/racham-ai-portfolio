'use client'
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-blue-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">The Architect</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Behind the Code</h3>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
      >
        <Quote className="absolute top-6 left-6 text-blue-500/10" size={60} />
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic relative z-10">
          "Racham is not just about writing lines of code; it's about architecting 
          autonomous ecosystems. My mission is to bridge the gap between 
          complex AI infrastructure and SME efficiency in Nigeria."
        </p>
      </motion.div>
    </section>
  );
}