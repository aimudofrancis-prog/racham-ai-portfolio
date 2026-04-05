'use client'

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-xl font-bold text-white uppercase tracking-tighter cursor-default"
          >
            Racham <span className="text-blue-500 italic">Global</span>
          </motion.div>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-2">
            Architecting the Nigerian Digital Frontier © {currentYear}
          </p>
        </div>

        {/* Dynamic Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <a href="#home" className="hover:text-blue-500 transition-colors">Top</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">Architect</a>
          <a href="#features" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors text-blue-400 border-l border-white/10 pl-6">Contact</a>
        </div>

        {/* Social Uplinks */}
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">X / Twitter</a>
        </div>
      </div>
      
      {/* Infrastructure Status Line */}
      <div className="max-w-7xl mx-auto mt-10 flex justify-center md:justify-start">
        <div className="flex items-center gap-2 opacity-30 group">
          <div className="h-1 w-1 rounded-full bg-blue-500" />
          <span className="text-[8px] font-mono uppercase tracking-tighter text-gray-500">
            Node_Status: Deployment_Success // Port_3000_Active
          </span>
        </div>
      </div>
    </footer>
  );
}