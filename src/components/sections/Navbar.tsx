'use client'
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 backdrop-blur-md border-b border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,136,255,0.4)]">R</div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">Racham <span className="text-blue-500">AI</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <a href="#about" className="hover:text-blue-400 transition-colors">Architect</a>
          <a href="#features" className="hover:text-blue-400 transition-colors">Infrastructure</a>
          <a href="#taxpilot" className="hover:text-blue-400 transition-colors">Case Studies</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors text-blue-500">Deploy Project</a>
        </div>
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
      </div>
    </nav>
  );
}