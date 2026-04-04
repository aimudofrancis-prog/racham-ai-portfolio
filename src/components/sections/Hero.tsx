'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Shield } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
    >
      {/* Status Badge */}
      <motion.div 
        variants={itemVariants}
        className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-400">
          Systems Online // Racham_AI_Architect
        </span>
      </motion.div>

      {/* Main Headline with Text Animation */}
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
      >
        Architecting the Future of <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic">
          SME Automation
        </span>
      </motion.h1>

      {/* Description Subtext */}
      <motion.p 
        variants={itemVariants}
        className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
      >
        Deploying High-Speed AI Solutions, Precision Prompt Engineering, and 
        Automated Tax Systems for the <span className="text-white font-medium text-bold">Nigerian Market.</span>
      </motion.p>

      {/* Action Buttons with Hover Effects */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 flex flex-col sm:flex-row gap-4"
      >
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 136, 255, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all group"
        >
          <Terminal size={18} className="group-hover:rotate-12 transition-transform" />
          View Command Center
          <ArrowRight size={18} />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all"
        >
          <Shield size={18} />
          View Projects
        </motion.button>
      </motion.div>

      {/* Bottom Visual Element (Subtle Glow) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full z-[-1]"
      />
    </motion.div>
  );
}