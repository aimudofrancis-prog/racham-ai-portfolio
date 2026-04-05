'use client'
import { motion } from 'framer-motion';

export default function Navbar() {
  const navLinks = [
    { name: "Architect", href: "#about" },
    { name: "Infrastructure", href: "#features" },
    { name: "Case Studies", href: "#taxpilot" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 backdrop-blur-md border-b border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,136,255,0.4)]">R</div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">Racham <span className="text-blue-500">AI</span></span>
        </motion.a>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="mailto:ceo@racham.ai" className="hover:text-blue-400 transition-colors text-blue-500 border-l border-white/10 pl-8">
            Deploy Project
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[9px] text-gray-500 font-mono hidden sm:block">V2.0_STABLE</div>
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        </div>
      </div>
    </nav>
  );
}